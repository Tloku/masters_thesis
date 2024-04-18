<script lang="ts">
    import { defineComponent } from 'vue';
    import Dropdown from 'primevue/dropdown';
    import Button from 'primevue/button';
    import FloatLabel from 'primevue/floatlabel'

    export default defineComponent({
        name: "CarSearchForm",
        components: {
            Dropdown,
            Button,
            FloatLabel
        },
        setup() {
            const goToBrowserPage = () => {}
            const filterOffers = () => {}
            
            return { goToBrowserPage, filterOffers }
        }
    })
</script>

<template>
    <div class="car-form-wrapper">
        <form>
            <div class="car-form-container">
                <FloatLabel>
                    <Dropdown
                        formControlName="bodyType"
                        inputId="body-type"
                        editable>
                    </Dropdown>
                    <label for="body-type">Typ nadwozia</label>
                </FloatLabel>

                <FloatLabel>
                    <Dropdown 
                        formControlName="brand"
                        inputId="brand"
                        editable
                        >
                    </Dropdown>
                    <label for="brand">Marka pojazdu</label>
                </FloatLabel>
                
                <FloatLabel>
                    <Dropdown
                        formControlName="model"
                        inputId="model"
                        editable>
                    </Dropdown>
                    <label for="model">Model pojazdu</label>
                </FloatLabel>
                
                <FloatLabel>
                    <Dropdown 
                        formControlName="generation"
                        inputId="generation"
                        editable>
                    </Dropdown>
                    <label for="generation">Generacja</label>
                </FloatLabel>

                <div class="range">
                    <span class="label">Cena</span>
                    <span class="short">
                        <Dropdown 
                            formControlName="priceFrom"
                            placeholder="Od"
                            inputId="price-from"
                            editable>
                        </Dropdown>
                    </span>
                    
                    <span class="short">
                        <Dropdown 
                            formControlName="priceTo"
                            placeholder="Do" 
                            inputId="price-to"
                            editable>
                        </Dropdown>
                    </span>
                </div> 


                <div class="range">
                    <span class="label">Rok produkcji</span>
                    <span class="short">
                        <Dropdown
                            formControlName="yearFrom"
                            placeholder="Od"
                            inputId="year-from" 
                            editable>
                        </Dropdown>
                    </span>

                    <span class="short">
                        <Dropdown 
                            formControlName="yearTo"
                            placeholder="Do"
                            inputId="year-to"
                            editable>
                        </Dropdown>
                    </span>
                </div>

                <FloatLabel>
                    <Dropdown 
                        formControlName="fuelType"
                        inputId="fuel-type"
                        editable>
                    </Dropdown>
                    <label for="fuel-type">Rodzaj paliwa</label>
                </FloatLabel>
                
                <div class="range">
                    <span class="label">Przebieg</span>
                    <span class="short">
                        <Dropdown
                            formControlName="mileageFrom"
                            placeholder="Od"
                            inputId="mileage-from" 
                            editable>
                        </Dropdown>
                    </span>
                
                    <span class="short">
                        <Dropdown 
                            formControlName="mileageTo"
                            placeholder="Do"
                            inputId="mileage-to"
                            editable>
                        </Dropdown>
                    </span>
                </div>

                <Button :click="goToBrowserPage()"  class="advanced-search" label="Wyszukiwanie zaawansowane"></Button>

                <Button :click="filterOffers()" class="show-offers" label="Pokaż ogłoszenia"></Button>

            </div>
        </form>
    </div>

</template>


<style lang="scss">


.car-form-wrapper {
    margin: 3px;
    padding:3px;
    width: 100%;

    .car-form-container {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 22px 30px;
        margin-left: 2px;

            
        .p-float-label {
            display: block !important;
            width: 250px !important;
        }
    }

    
    .car-form-container .range {
        display: flex;
        gap: 30px;
    }
    
    .short {
        width: 110px;
    }
    
    .p-dropdown {
        border-color: transparent;
        background-color: var(--secondary-100);
        box-shadow: 0 0 0 1px var(--main-800);
    }
    
    .p-dropdown:not(.p-disabled):hover {
        border-color: var(--main-200);
    }
    
    .p-dropdown:not(.p-disabled).p-focus {
        box-shadow: 0 0 0 0.2rem var(--main-100);
        border-color: var(--main-300);
    }
    
    .range .label {
        font-size: 0.75em;
        position: absolute;
        transform: translateY(-21px) translateX(8px);
        z-index: 1000;
        color: gray;
    }
    
    
    .advanced-search {
        background-color: transparent;
        color: var(--main-500);
        border: none;
    }
    
    
    .advanced-search:hover {
        background-color: var(--secondary-200) !important;
        color: var(--main-600) !important;
    }
    
    .show-offers {
        background-color: var(--main-500) !important;
    }
}


</style>