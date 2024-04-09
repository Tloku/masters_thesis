<template>
<div class="wrapper">
    <span class="awarded-offers-label">Wyróżnione oferty</span>
    <div class="offers">
        <div v-for="offer in awardedOffers">
            <AwardedOffer :offer="offer" :key="offer.offerId"></AwardedOffer>
        </div>
    </div>
</div>
</template>

<script lang="ts">
    import { computed, defineComponent} from 'vue';
    import AwardedOffer from '../awarded-offer/AwardedOffer.vue';
    import { useStore } from 'vuex';

    
    export default defineComponent({
        name: 'AwardedOfferGrid',
        components: {
            AwardedOffer
        },
        async setup() {
            const store = useStore()

            const awardedOffers = computed(() => {
                return store.getters.awardedOffers;
            });

            store.dispatch('getAwardedOffers')
            return { awardedOffers, store}
        },
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