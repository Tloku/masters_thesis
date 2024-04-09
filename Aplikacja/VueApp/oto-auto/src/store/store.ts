import { createStore } from "vuex";
import offerCardModule from "./state/offerModule";
import equipmentModule from "./state/equipmentModule";

 const store = createStore({
    modules: {
        offerCard: offerCardModule,
        equipmentType: equipmentModule,
        createOfferForm: {}
    }
})


export default store;