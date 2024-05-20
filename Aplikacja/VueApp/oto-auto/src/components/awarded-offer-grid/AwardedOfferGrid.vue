<template>
<div class="wrapper">
    <span class="awarded-offers-label">Wyróżnione oferty</span>
    <div class="offers">
        <div v-for="offer in awardedOffers">
            <AwardedOffer @click="goToOfferDetails(offer.offerId)" :offer="offer" :key="offer.offerId"></AwardedOffer>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
    import { computed, } from 'vue';
    import AwardedOffer from '../awarded-offer/AwardedOffer.vue';
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';
    const router = useRouter()
    const store = useStore()

    const awardedOffers = computed(() => {
        return store.getters.awardedOffers;
    });

    store.dispatch('getAwardedOffers')
    

    const goToOfferDetails = (id: number) => {
        router.push({ name: 'offer', params: { id: id }});
    }
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