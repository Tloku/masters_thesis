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
    import { OfferCardComponentModel } from '@/src/store/offer/offer-card-component.model';
    import { defineComponent, ref } from 'vue';
    import AwardedOffer from '../awarded-offer/AwardedOffer.vue';

    export default defineComponent({
        name: 'AwardedOfferGrid',
        components: {
            AwardedOffer
        },
        setup() {
            const offers = ref<OfferCardComponentModel[]>([])

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