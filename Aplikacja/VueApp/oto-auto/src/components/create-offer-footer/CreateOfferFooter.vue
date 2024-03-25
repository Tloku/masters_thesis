<script lang="ts">
    import { defineComponent } from 'vue';
    import Button  from 'primevue/button'

    export default defineComponent({
        name: 'createOfferFooter',
        component: {
            Button
        }
    })

</script>

<template>
    <div class="wrapper">
        <Button
            :click="() => {}"
            label="Dodaj ogłoszenie"
            class="create-offer"
        ></Button>
    </div>

</template>

<style scoped lang="scss">
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        height: 100%;
        padding-right: 2vw;

        .p-button {
            width: 100%;
            height: 100%;
            border-radius: 5px;
            background-color: var(--main-500);
            border: 4px solid var(--main-500);
            font-weight: 700;

            .p-component:hover { 
                background-color: var(--secondary-100);
                color: var(--main-500);
            }
        }

        .button-wrapper {
            position: relative;
            width: 10vw;
            min-width: 150px;
            height: 7vh;
        }
    }
</style>