import { createStore } from "vuex";
import offerCardModule from "./state/offerModule";
import equipmentModule from "./state/equipmentModule";
import createOfferModule from "./state/createOfferModule";

 const store = createStore({
    modules: {
        offerCard: offerCardModule,
        equipmentType: equipmentModule,
        createOfferForm: createOfferModule
    }
})


export default store;