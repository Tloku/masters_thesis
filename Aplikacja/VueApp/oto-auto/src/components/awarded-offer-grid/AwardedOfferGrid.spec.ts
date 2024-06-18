import { shallowMount, createLocalVue } from '@vue/test-utils';
import { createRouter } from 'vue-router';

import Vuex from 'vuex';
import AwardedOfferGrid from './AwardedOfferGrid.vue';
;

const localVue = createLocalVue();
localVue.use(Vuex);

describe('AwardedOffers.vue', () => {
  let store: any;
  let getters: any;
  let actions: any;
  let router: any;

  beforeEach(() => {
    getters = {
      awardedOffers: () => [
        {
            offerId: 1,
            offerMainImage: {
                imageBytes: '',
                isMainImage: true
            },
            offerTitle: 'offer1',
            yearOfProduction: '2000',
            mileage: '1000',
            mileageUnit: "km",
            fuelType: 'benzyna',
            engineCapacity: '2000',
            offerPrice: "100000",
            offerCurrency: "pln"
        },
        {
            offerId: 2,
            offerMainImage: {
                imageBytes: '',
                isMainImage: true
            },
            offerTitle: 'offer2',
            yearOfProduction: '2010',
            mileage: '100000',
            mileageUnit: "km",
            fuelType: 'benzyna',
            engineCapacity: '2001',
            offerPrice: "300000",
            offerCurrency: "pln"
        },
      ],
    };

    actions = {
      getAwardedOffers: jest.fn(),
    };

    store = new Vuex.Store({
      getters,
      actions,
    });

  });

  it('should create', () => {
      const wrapper = shallowMount(AwardedOfferGrid, { store, localVue, router });
      expect(wrapper.exists()).toBeTruthy();
  });

  it('should dispatch getAwardedOffers action on init', () => {
    shallowMount(AwardedOfferGrid, { store, localVue, router });
    expect(actions.getAwardedOffers).toHaveBeenCalled();
  });

  it('should select awardedOffers from the store', () => {
    const wrapper = shallowMount(AwardedOfferGrid, { store, localVue, router });
    const offers = wrapper.findAllComponents(AwardedOfferGrid);
    expect(offers.length).toBe(2);
    expect(offers.at(0).props().offer).toEqual( {
        offerId: 1,
        offerMainImage: {
            imageBytes: '',
            isMainImage: true
        },
        offerTitle: 'offer1',
        yearOfProduction: '2000',
        mileage: '1000',
        mileageUnit: "km",
        fuelType: 'benzyna',
        engineCapacity: '2000',
        offerPrice: "100000",
        offerCurrency: "pln"
    });
    expect(offers.at(1).props().offer).toEqual({
        offerId: 2,
        offerMainImage: {
            imageBytes: '',
            isMainImage: true
        },
        offerTitle: 'offer2',
        yearOfProduction: '2010',
        mileage: '100000',
        mileageUnit: "km",
        fuelType: 'benzyna',
        engineCapacity: '2001',
        offerPrice: "300000",
        offerCurrency: "pln"
    });
  });
});
