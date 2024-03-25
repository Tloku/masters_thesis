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

                <Button (onClick)="goToBrowserPage()"  class="advanced-search" label="Wyszukiwanie zaawansowane"></Button>

                <Button (onClick)="filterOffers()" class="show-offers" label="Pokaż ogłoszenia"></Button>

            </div>
        </form>
    </div>

</template>


<style lang="scss">


</style>