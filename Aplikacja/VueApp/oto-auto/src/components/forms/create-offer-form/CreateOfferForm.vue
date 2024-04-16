<script lang="ts">
    import { defineComponent, ref } from 'vue';
    import Dropdown from 'primevue/dropdown';
    import Button from 'primevue/button';
    import FloatLabel from 'primevue/floatlabel'
    import InputText from 'primevue/inputtext'
    import SelectButton from 'primevue/selectbutton'
    import TextArea from 'primevue/textarea'
import ImageUploader from '../image-uploader/ImageUploader.vue';


    export default defineComponent({
        name: "CreateOfferForm",
        components: {
            Dropdown,
            Button,
            FloatLabel,
            InputText,
            SelectButton,
            TextArea,
            ImageUploader
        },
        setup() {
            const stateOptions = ref([
                { name: 'Tak', value: true },
                { name: 'Nie', value: false },
            ]);
            const vehicleTypeOptions: any[] = [
                'Samochód osobowy', 'Motocykl'
            ]
            return { stateOptions, vehicleTypeOptions }
        }
    })

</script>

<template>
    <div class="wrapper">
        <div class="title">
            <form>
                <h1>Stwórz ogłoszenie</h1>
                <Dropdown
                    inputId="vehicleType"  
                    placeholder="Wybierz rodzaj pojazdu"    
                />
            </form>
        </div>

        <div class="vehicle-details">
            <h1>Dane pojazdu</h1>
        
            <div class="main-features">
                <form>
                    <h2>Cechy główne</h2>
                    <div class="row">
                        <h3>Uszkodzony</h3>
                        <SelectButton
                            styleClass="main-feature-button"
                            :options="stateOptions"
                            optionLabel="name"
                            />
                        </div>
                        <div class="row">
                            <h3>Importowany</h3>
                            <SelectButton
                            styleClass="main-feature-button"
                            :options="stateOptions"
                            optionLabel="name"
                        />
                    </div>
                </form>
            </div>
        </div>

        <div class="basic-info">
            <h2>Informacje podstawowe</h2>
            <form>
                <div class="row">
                    <FloatLabel>
                        <InputText id="vin" :style="{width: '100%'}"/>
                        <label for="vin">VIN</label>    
                    </FloatLabel>

                    <FloatLabel>
                        <InputText id="mileage" :style="{width: '100%'}"/>
                        <label for="mileage">Przebieg</label>
                    </FloatLabel>
                </div>
            </form>
        </div>

        <div class="technical-data">
            <h2>Dane techniczne</h2>
            <form>
                <div class="row">
                    <FloatLabel>
                        <InputText id="yearOfProduction" :style="{width: '100%'}"/>
                        <label for="yearOfProduction">Rok produkcji</label>
                    </FloatLabel>

                    <FloatLabel>
                        <InputText id="brand" :style="{width: '100%'}"/>
                        <label for="brand">Marka pojazdu</label>
                    </FloatLabel>
                </div>

                <div class="row">
                    <FloatLabel>
                        <InputText id="model" :style="{width: '100%'}"/>
                        <label for="model">Model</label>
                    </FloatLabel>

                    <FloatLabel>
                        <InputText id="fuelType" :style="{width: '100%'}"/>
                        <label for="fuelType">Rodzaj paliwa</label>
                    </FloatLabel>
                </div>

                <div class="row">
                    <FloatLabel>
                        <InputText id="horsepower" :style="{width: '100%'}"/>
                        <label for="horsepower">Moc</label>
                    </FloatLabel>

                    <FloatLabel>
                        <InputText id="engineCapacity" :style="{width: '100%'}"/>
                        <label for="engineCapacity">Pojemność skokowa</label>
                    </FloatLabel>
                </div>

                <div class="row">
                    <FloatLabel>
                        <InputText id="numberOfDoors" :style="{width: '100%'}"/>
                        <label for="numberOfDoors">Liczba drzwi</label>
                    </FloatLabel>

                    <FloatLabel>
                        <InputText id="transmission" :style="{width: '100%'}"/>
                        <label for="transmission">Skrzynia biegów</label>
                    </FloatLabel>
                </div>

                <div class="row">
                    <FloatLabel>
                        <InputText id="version" :style="{width: '100%'}"/>
                        <label for="version">Wersja</label>
                    </FloatLabel>

                    <FloatLabel>
                        <InputText id="generation" :style="{width: '100%'}"/>
                        <label for="generation">Generacja</label>
                    </FloatLabel>
                </div>

                <div class="row">
                    <FloatLabel>
                        <InputText id="bodyType" :style="{width: '100%'}"/>
                        <label for="bodyType">Typ nadwozia</label>
                    </FloatLabel>

                    <FloatLabel>
                        <InputText id="color" :style="{width: '100%'}"/>
                        <label for="color">Kolor</label>
                    </FloatLabel>
                </div>
            </form>
        </div>

        <div class="image-form">
            <h2>Zdjęcia</h2>
            <ImageUploader></ImageUploader>
        </div>

        <div class="vehicle-description">
            <h2>Opis pojazdu</h2>

            <form>
                <FloatLabel>
                    <InputText id="title" :style="{width: '100%'}"/>
                    <label for="title">Tytuł</label>
                </FloatLabel>

                <FloatLabel>
                    <TextArea :rows="8" :auto-resize="true" id="description" :style="{width: '100%'}"/>
                    <label for="description">Opis</label>
                </FloatLabel>
            </form>
        </div>

        <div class="additional-properties">
            <h2>Wyświetl dodatkowe szczegóły</h2>
            additional-properties
        </div>

        <div class="price">
            <h2>Cena</h2>

            <form>
                <div class="row">
                    <h3>Cena netto</h3>
                    <SelectButton
                     :options="stateOptions"
                     optionLabel="name"                        
                     />
                </div>

                <div class="price-input-row">
                    <FloatLabel>
                        <InputText id="price" :style="{width: '100%'}"/>
                        <label for="price">Cena</label>
                    </FloatLabel>
                    <FloatLabel>
                        <InputText id="currency" :style="{width: '100%'}"/>
                        <label for="currency">Waluta</label>
                    </FloatLabel>
                </div>
            </form>
        </div>

        <div class="dealer-data">
            <h2>Dane sprzedającego</h2>
            <form>
                <div class="row">
                    <FloatLabel>
                        <InputText id="name" :style="{width: '100%'}"/>
                        <label for="name">Twoje imię</label>
                    </FloatLabel>
                    
                    <FloatLabel>
                        <InputText id="address" :style="{width: '100%'}"/>
                        <label for="address">Adres</label>
                    </FloatLabel>
                </div>

                <div class="half-row">
                    <FloatLabel>
                        <FloatLabel>
                            <InputText id="phoneNumber" :style="{width: '100%'}"/>
                            <label for="phoneNumber">Numer telefonu</label>
                        </FloatLabel>
                    </FloatLabel>
                </div>
            </form>
        </div>

    </div>
</template>


<style scoped lang="scss">
    .wrapper {
        width: 80%;
        margin: auto;
        display: flex;
        flex-direction: column;
        gap: 3vh;
        position: relative;


            .vehicle-details {
            margin: 3vh auto;
            width: 100%;

            h1 {
                font-size: 1.5em;
                font-weight: 500;
            }
    
            .basic-info,
            .technical-data,
            .dealer-data {
                h2 {
                    font-weight: 500;
                }
                
                .row {
                    width: 100%;
                    display: flex;
                    gap: 2vw;


                    .p-float-label {
                        width: 50% !important;
                    }
                    
                    .p-inputtext {
                        width: 100% !important;
                    }
                }
            }

            .dealer-data {
                .half-row {
                    .p-float-label {
                        width: 50% !important;
                    }
                    
                    .p-inputtext {
                        width: 100% !important;
                    }
                }
            }

            .main-features  {
                form {
                    display: flex;
                    flex-direction: column;
                    gap: 3vh;
                }

                h2 {
                    font-weight: 500;
                }

                .row {
                    display: flex;
                    padding-bottom: 20px;
                    height: 50px;
                    align-items: center;
                    justify-content: space-between;
                    border-bottom: 1px solid var(--secondary-300);

                    h3 {
                        font-size: 1.05em;
                        font-weight: lighter;
                        flex: 0 0 auto;
                        margin-right: auto;
                    }

                    .p-selectbutton {
                        flex: 0 0 auto;
                        margin-left: auto;
                    }
                }
            }

            .vehicle-description {
                form {
                    display: flex;
                    flex-direction: column;
                    gap: 3vh;
                }

                h2 {
                    font-weight: 500;
                }

                .p-float-label {
                    width: 100% !important;
                }
                
                .p-inputtext {
                    width: 100% !important;
                }
            }
        }

        .price, .additional-properties {
            h2 {
                font-weight: 500;
            }
        }
        
        .vehicle-description form,
        .price form {
            display: flex;
            flex-direction: column;
            gap: 3vh;

            .price-input-row {
                width: 50%;
                display: flex;
                gap: 1vw;
            }
        }
        
        .price .row {   
            display: flex;
            padding-bottom: 20px;
            height: 50px;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid var(--secondary-300);
        }
        
        .price .row h3 {
            font-size: 1.05em;
            font-weight: lighter;
        }
        
        .price .row h3,
        .price .row .p-selectbutton {
            flex: 0 0 auto;
        }
        
        .technical-data h2,
        .additional-properties h2,
        .price h2,
        .dealer-data h2,
        .vehicle-description h2 {
            padding-bottom: 2vh;
        }
        
        .technical-data .row,
        .dealer-data .row {
            width: 100%;
            display: flex;
            
            gap: 2vw;
            margin-bottom: 4vh;
        }
        
        .technical-data .row .p-float-label,
        .dealer-data .row .p-float-label,
        .dealer-data .half-row .p-float-label {
            width: 50% !important;
        }
        
        .dealer-data .half-row {
            margin-right: 2vw !important; 
        }
        
        .image-form {
            padding-bottom: 2vh;
        }

        :deep .p-selectbutton .p-button{
            width: 13vw !important;
            height: 30px !important;
            background-color: var(--main-300);
            border-color: var(--main-300);
            color: var(--secondary-500) !important;
            text-align: start;
            box-shadow: none;
        }

        :deep .p-selectbutton .p-button .p-button-label  {
            font-weight: light !important;
        }

        :deep  .p-selectbutton.p-button:first-of-type {
            margin-right: 0.5vw !important;
        }
  
        :deep .p-buttonset.p-button :not(:last-child) { 
            border: 1px solid #ced4da !important;
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
            border-color: var(--main-300) !important;
        }

        :deep .p-buttonset .p-button :last-of-type {
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }

        :deep .p-selectbutton .p-button:not(.p-disabled):not(.p-highlight):hover {
            background-color: var(--main-100) !important;
            border-color: var(--main-300) !important;
            color: var(--secondary-500) !important;
        }

        :deep .p-selectbutton .p-button .p-highlight:hover,
        :deep .p-selectbutton .p-button .p-highlight {
            background-color: var(--main-200) !important; 
        } 
        
    }


</style>