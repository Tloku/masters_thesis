import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'
import MainPage from './pages/main/MainPage.vue';
import CreateOfferPage from './pages/create-offer/CreateOfferPage.vue';
import OfferViewPage from './pages/offer-view/OfferViewPage.vue';
import { createRouter, createWebHistory } from 'vue-router';
import store from './store/store';

const routes = [
    { path: '/', component: MainPage},
    { path: '/offer/:id', component: OfferViewPage, name: "offer" },
    { path: '/new-offer', component: CreateOfferPage },
  ]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


const app = createApp(App)
app.use(PrimeVue)
app.use(router)
app.use(store)

app.mount('#app')
