import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AwardedOfferGridComponent } from './awarded-offer-grid.component';
import { Store, NgxsModule } from '@ngxs/store';
import { of } from 'rxjs';
import { OfferCardComponentModel } from 'src/store/offer/offer-card-component.model';
import { GetAwardedOffers } from 'src/store/offer/offer-actions';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AwardedOfferComponent } from '../awarded-offer/awarded-offer.component';

describe('AwardedOfferGridComponent', () => {
  let component: AwardedOfferGridComponent;
  let fixture: ComponentFixture<AwardedOfferGridComponent>;
  let store: Store;

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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AwardedOfferGridComponent, AwardedOfferComponent],
      imports: [
        NgxsModule.forRoot([]),
        NoopAnimationsModule
      ],
      providers: [
        { 
          provide: Store, 
          useValue: {
            dispatch: jasmine.createSpy('dispatch'),
            select: () => of(mockOffers)
          } 
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardedOfferGridComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch GetAwardedOffers action on init', () => {
    expect(store.dispatch).toHaveBeenCalledWith(new GetAwardedOffers());
  });

  it('should select offers from the store', () => {
    component.offers$.subscribe(offers => {
      expect(offers).toEqual(mockOffers);
    });
  });
});
