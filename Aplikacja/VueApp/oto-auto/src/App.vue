<script lang="ts">
    import MainPage from './pages/main/MainPage.vue';
    import { defineComponent } from 'vue';
    import Navbar from './components/navbar/Navbar.vue'

    export default defineComponent({
        name: 'App',
        components: {
            MainPage,
            Navbar
        },
        setup() {
            
        }
    })
</script>

<template>
    <div class="root">
        <Navbar />
        <router-view />
    </div>
</template>

<style scoped>
    .root {
        width: 100%;
        height: fit-content;
        background-color: var(--secondary-100);
        padding-top: 5vh;
    }

</style>
