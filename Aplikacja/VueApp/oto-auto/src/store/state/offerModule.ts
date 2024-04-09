import OfferCardComponentStateModel, { OfferActivityComponentModel, OfferCardComponentModel } from '../model/offer-card-component.model.ts'
import { OfferRestService } from '../..//api/rest-service/offer-rest-service.ts' 
import { RedisCacheService } from '../../api/rest-service/redis-cache.service.ts';
import { AxiosResponse } from 'axios';

export enum RedisCacheKeys {
    OFFER = "offer:"
}


const initialOfferStateValue: OfferCardComponentStateModel = {
    offerCardsComponent: [],
    offerImages: [],
    offer: {
        offerId: 0,
        offerImages: [],
        offerTitle: "",
        offerDescription: "",
        yearOfProduction: "",
        mileage: "",
        fuelType: "",
        engineCapacity: "",
        offerPrice: "",
        offerCurrency: "",
        equipments: [],
        vehicleAttributes: []
    },
    redisNotResponding: false
}

const offerCardModule = {
    state: () => (initialOfferStateValue),
    mutations: {
        getAwardedOffers (state: OfferCardComponentStateModel, offers: OfferCardComponentModel[]) {
            state.offerCardsComponent = offers;
        },
        getOfferById(state: OfferCardComponentStateModel, offer: OfferActivityComponentModel) {
            state.offer = offer
        },
        setRedisNotResponding(state: OfferCardComponentStateModel, value: boolean) {
            state.redisNotResponding = value
        }
    },
    actions: {
        async getAwardedOffers(context) {
            const response = await OfferRestService.getAwardedOffers();
            const offers: OfferCardComponentModel[] = response.data;
            context.commit("getAwardedOffers", offers)
        },
        async getOfferById(context, id: number) {
            const state: OfferCardComponentStateModel = context.state;

            if (state.redisNotResponding) {
                context.commit('getOfferById', getOfferByIdFromServer(id))
            }

            try {
                const redisResp: AxiosResponse<OfferActivityComponentModel | undefined> = await RedisCacheService.get<OfferActivityComponentModel>(RedisCacheKeys.OFFER + id); 
            
                if (redisResp.data) {
                    context.commit('getOfferById', redisResp.data)
                }

                const offer = await getOfferByIdFromServer(id);
                cacheOfferDetails(offer, state.redisNotResponding)
                context.commit('getOfferById', offer);
            } catch(error) {
                if (!state.redisNotResponding) {
                    //TODO toast here
                }

                context.commit('setRedisNotResponding', true);
                setTimeout(() => {
                    context.commit('setRedisNotResponding', false);
                }, 5 * 60 * 1000);

                try {
                    context.commit('getOfferById', await getOfferByIdFromServer(id));
                 } catch (e) {
                    //  toast.current.show({severity:'error', detail:'Błąd podczas wyświetlania oferty'});
                    throw e;
                 }
            }
        }  
    },
    getters: {
        awardedOffers(state: OfferCardComponentStateModel): OfferCardComponentModel[] {
            return state.offerCardsComponent
        },
        offer(state: OfferCardComponentStateModel): OfferActivityComponentModel {
            return state.offer
        }
    }
  }


export default offerCardModule;

const cacheOfferDetails = async (offer: OfferActivityComponentModel, redisNotResponding: boolean) => {
    if (redisNotResponding) {
        return;
    }
    RedisCacheService.set(RedisCacheKeys.OFFER + offer.offerId, offer);
}

const getOfferByIdFromServer = async (offerId: number): Promise<OfferActivityComponentModel> => {
    const response = await OfferRestService.getOfferById(offerId);
    return response.data as OfferActivityComponentModel;
}