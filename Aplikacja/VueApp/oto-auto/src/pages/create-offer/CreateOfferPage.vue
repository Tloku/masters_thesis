<script lang="ts">
import { defineComponent } from 'vue';
import CreateOfferForm from '../../components/forms/create-offer-form/CreateOfferForm.vue';
import CreateOfferFooter from '../../components/create-offer-footer/CreateOfferFooter.vue';
    export default defineComponent({
        name: "CreateOfferPage",
        components: { 
            CreateOfferForm,
            CreateOfferFooter
        }
    })
</script>

<template>
    <div class="create-offer-wrapper">
        <div class="form-component">
            <CreateOfferForm />
            <div class="footer">
                <CreateOfferFooter />
            </div>
        </div>

        <div class="tips-component">
            
        </div>
    </div>
</template>

<style scoped lang="scss">
.create-offer-wrapper {
    display: flex;
    width: 100%;
    height: fit-content;
    background-color: var(--secondary-100);


    .form-component {
        position: relative;
        min-height: 90vh;
        width: 65%;
        height: fit-content;
        border-right: 1px solid var(--main-500);
        box-shadow: 6px 0 3px -2px var(--secondary-400);
        z-index: 100; 
    
        .footer {
            position: sticky;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 10vh;
            background-color: var(--secondary-100);
            border: 1px solid var(--secondary-300);
          }
    }
    
        .tips-component {
            min-height: 90vh;
            width: 35%;
            height: auto;
            background-color: var(--main-100);
        }
    
}    


</style>