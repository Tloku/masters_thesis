import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';


const app = createApp(App)
app.use(PrimeVue)
app.component('TabView', TabView)
app.component('TabPanel', TabPanel)
app.mount('#app')
