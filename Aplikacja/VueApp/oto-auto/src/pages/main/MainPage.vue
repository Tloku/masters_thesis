<template>
    <div class="container">
        <div class="search-engine">
            <MainSearchEngine />
        </div>
        
        <div class="awarded-offers">
            <Suspense>
                <template #default>
                    <AwardedOfferGrid />
                </template>
                <template #fallback >
                    Ładowanie...
                </template>
            </Suspense>
        </div>
    </div>
    

</template>

<script lang="ts">
    import AwardedOfferGrid from '../../components/awarded-offer-grid/AwardedOfferGrid.vue'
    import MainSearchEngine from '../../components/main-search-engine/MainSearchEngine.vue'
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'MainPage',
        components: {
            AwardedOfferGrid,
            MainSearchEngine
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