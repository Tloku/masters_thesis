import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'
import OfferViewPage from './pages/offer-view/OfferViewPage.vue';
import MainPage from './pages/main/MainPage.vue';
import CreateOfferPage from './pages/create-offer/CreateOfferPage.vue';
import { createMemoryHistory, createRouter } from 'vue-router';

const routes = [
    { path: '/', component: MainPage, name: "MainPage"},
    { path: '/offer/:id', component: OfferViewPage, name: "OfferViewPage" },
    { path: '/new-offer', component: CreateOfferPage, name: "CreateOfferPage" },
  ]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})


const app = createApp(App)
app.use(PrimeVue)
app.use(router)

app.mount('#app')
