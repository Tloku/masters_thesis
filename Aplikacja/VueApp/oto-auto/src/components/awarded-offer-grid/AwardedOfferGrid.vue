<template>
<div class="wrapper">
    <span class="awarded-offers-label">Wyróżnione oferty</span>
    <div class="offers">
        <div v-for="offer in offers">
            <AwardedOffer :offer="offer" :key="offer.offerId"></AwardedOffer>
        </div>
    </div>
</div>
</template>

<script lang="ts">
    import { OfferCardComponentModel } from '../../store/offer/offer-card-component.model';
    import { defineComponent} from 'vue';
    import AwardedOffer from '../awarded-offer/AwardedOffer.vue';
    import { OfferRestService } from '../../api/rest-service/offer-rest-service';

    export default defineComponent({
        name: 'AwardedOfferGrid',
        components: {
            AwardedOffer
        },
        async setup() {
            const response = await OfferRestService.getAwardedOffers();
            const offers: OfferCardComponentModel[] = response.data;
            return { offers }
        }
    })

</script>

<style scoped>
    .awarded-offers-label {
        width: 85%;
        font-size: 2em;
    }

    .offers {
        margin-top: 2vh;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: auto;
        row-gap: 3vh;
    }
</style>