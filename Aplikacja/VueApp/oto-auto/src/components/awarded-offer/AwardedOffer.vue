<template>
    <div class="offer-content"
        v-if="offer"
        @click="onOfferClick">
        <img 
            class="car-pic"
            :src="'data:image/jpg;base64,' + offer.offerMainImage.imageBytes" 
            alt="car">
        <span 
            class="offer-name">
            {{ offer.offerTitle }}
        </span>
        <div class="offer-info">
            <span> {{ offer.yearOfProduction }} </span>
            <span> {{ offer.mileage + " " + offer.mileageUnit }} </span>
            <span> {{ offer.fuelType }} </span>
            <span> {{ offer.engineCapacity + "cm3" }} </span>
        </div>
        <span class="offer-price">
            {{ offer.offerPrice + " " + offer.offerCurrency }} 
        </span>
    </div>
</template>

<script lang="ts">
    import { PropType, defineComponent } from 'vue';
    import { OfferCardComponentModel } from '../../store/offer/offer-card-component.model';

    export default defineComponent({
        name: 'AwardedOffer',
        props: {
            offer: {
                required: true,
                type: Object as PropType<OfferCardComponentModel>
            }
        },
        methods: {
            onOfferClick(): void {

            }
        }

    })
</script>


<style lang="scss" scoped>
    .offer-content {
    margin: 10px;
    width: 280px;
    height: 328px;
    border-radius: 7px;
    box-shadow: 0px 0px 2px 2px var(--secondary-200);
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;


        .car-pic {
            width: 100%;
            height: 208px;
            border-top-left-radius: 7px;
            border-top-right-radius: 7px;
            box-shadow: 0px 2px 1px var(--main-300);
            object-fit: cover;
        }
        
        .offer-name {
            margin-top: 5px;
            padding: 7px;
            width: 95%;
            font-weight: bold;
            font-size: 1.1em;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        
        .offer-info {
            width: 90%;
            font-size: 0.85em;
            font-weight: 500;
        }
        
        .offer-info span:not(:last-child)::after {
            content: "\00B7"
        }
        
        .offer-price {
            font-size: 1.5em;
            font-weight: bolder;
            padding: 10px;
            margin-top: 8px;
            color: var(--main-500);
            align-self: flex-start;
        }
    }


</style>../../store/model/offer-card-component.model