import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { getAwardedOffers } from '../../redux/state/offerSlice';
import { OfferCardComponentModel } from '../../redux/model/offer-card-component.model';
import { RootState } from '../../redux/store/store';
import { AwardedOfferGridComponent } from './awarded-offer-grid';

jest.mock('../../redux/state/offerSlice');
jest.mock('../awarded-offer/awarded-offer', () => ({
  AwardedOffer: jest.fn(() => <div>Awarded Offer</div>)
}));

const middlewares = [thunk as ThunkMiddleware<RootState, any>];
const mockStore = configureStore<RootState>(middlewares);

describe('AwardedOfferGridComponent', () => {
  let store: MockStoreEnhanced<RootState, {}>;
  const mockOffers: OfferCardComponentModel[] = [
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
  ];

  beforeEach(() => {
    store = mockStore({
      offerCard: { 
        offerCardsComponent: mockOffers,
        redisNotResponding: false,
        offer: null,
        offerImages: []
       }
    });

    (getAwardedOffers as jest.Mock).mockReturnValue({ type: 'GET_AWARDED_OFFERS' });
  });

  it('should create', () => {
    const { container } = render(
      <Provider store={store}>
        <AwardedOfferGridComponent />
      </Provider>
    );
    expect(container).toBeTruthy();
  });

  it('should dispatch getAwardedOffers action on init', () => {
    render(
      <Provider store={store}>
        <AwardedOfferGridComponent />
      </Provider>
    );
    expect(store.getActions()).toContainEqual({ type: 'GET_AWARDED_OFFERS' });
  });

  it('should select offers from the store', () => {
    render(
      <Provider store={store}>
        <AwardedOfferGridComponent />
      </Provider>
    );
    const awardedOfferElements = screen.getAllByText('Awarded Offer');
    expect(awardedOfferElements.length).toBe(mockOffers.length);
  });
});
