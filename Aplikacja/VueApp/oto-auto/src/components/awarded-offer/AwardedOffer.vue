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
    import { OfferCardComponentModel } from '@/src/store/offer/offer-card-component.model';

    export default defineComponent({
        name: 'AwardedOffer',
        props: {
            offer: {
                required: true,
                type: Object as PropType<OfferCardComponentModel>
            }
        },
        setup(props) {
            console.log(props.offer.offerId);
        },
        methods: {
            onOfferClick(): void {

            }
        }

    })
</script>


<style scoped>

</style>