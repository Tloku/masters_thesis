<template>
    <div class="container">
        <div class="search-engine">
            <!-- <main-search-engine></main-search-engine> -->
        </div>

        <div class="awarded-offers">
            <AwardedOfferGrid />
        </div>
    </div>
</template>

<script lang="ts">
    import AwardedOfferGrid from '../../components/awarded-offer-grid/AwardedOfferGrid.vue'
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'MainPage',
        components: {
            AwardedOfferGrid
        },
        setup() {
        }
    })
</script>

<style scoped>
    .container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: fit-content;
    }

    .search-engine {
        width: 100%;
    }

    .awarded-offers {
        margin-top: 3vh;
        width: 75%;
    }
</style>