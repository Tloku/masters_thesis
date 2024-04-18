<template>
   <div className="additional-properites-wrapper">
        <Accordion :multiple="true">
            <AccordionTab header="Dane techniczne">
                <form>
                    <div className="technical-data">
                        <div className="row">
                            <h3>Kierownica po prawej (anglik)</h3>
                            <SelectButton
                                className="technical-data-button"
                                :options="stateOptions"
                                optionLabel="label"
                            ></SelectButton>
                        </div>
                    </div>
                </form>

                <form>
                    <div className="additional-technical-data">
                        <div className="row">
                            <span className="p-float-label">
                                <InputText 
                                    id="drive"
                                />
                                <label htmlFor="drive">Napęd</label>
                            </span>

                            <span className="p-float-label">
                                <InputText 
                                    id="emission"
                                />
                                <label htmlFor="emission">Emisja CO2</label>
                            </span>
                        </div>

                        <div className="row">
                            <span className="p-float-label">
                                <InputText 
                                    id="colorType"
                                />
                                <label htmlFor="colorType">Rodzaj koloru</label>
                            </span>

                            <span className="p-float-label">
                                <InputText 
                                    id="numberOfSeats"
                                    
                                />
                                <label htmlFor="numberOfSeats">Liczba miejsc</label>
                            </span>
                        </div>
                    </div>
                </form>
            </AccordionTab>

            <AccordionTab header="Wyposażenie">
                <div className="equipment-wrapper">
                    <Accordion :multiple="true">
                        <AccordionTab :header="eq.type" v-for="(eq, index) in equipmentTypes" :key="index">
                            <div 
                                class="equipment-checkbox-wrapper"
                                >
                                <div v-for="(item, index) in eq.equipment.values" :key="index" class="equipment-checkbox">
                                    <input 
                                        type='checkbox'
                                        :checked="item.value"
                                        v-model="item.value"
                                    />
                                    <label>
                                        {{ item.name }}
                                    </label>
                                </div>

                            </div>
                        </AccordionTab>
                    </Accordion>
                </div>
            </AccordionTab>
            <AccordionTab header="Historia"></AccordionTab>
        </Accordion>
    </div>
</template>

<script lang="ts">
import { ComputedRef, computed, defineComponent } from 'vue';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import InputText from 'primevue/inputtext';
import { useStore } from 'vuex';
import { EquipmentType } from '@/src/api/models/equipment-type';
import SelectButton from 'primevue/selectbutton';
import { Equipment, EquipmentForm, EquipmentItemsForm, EquipmentValuesForm } from '@/src/store/model/create-offer-form.model';


    export default defineComponent({
        name: 'AdditionalProperties',
        components: {
            Accordion,
            AccordionTab,
            InputText,
            SelectButton
        },
        async setup() {
            const stateOptions: any[] = [{label: 'Nie', value: false}, {label: 'Tak', value: true}];
            const store = useStore()
            const equipmentTypes: ComputedRef<EquipmentForm[]> = computed(
                    () => {
                        const equipmentTypes = store.getters.equipmentTypes;
                        if (!equipmentTypes || equipmentTypes.length == 0) {
                            return [];
                        }
                        const equipmentForms: EquipmentForm[] = [];
                        equipmentTypes.forEach((equipmentType: EquipmentType) => {
                            equipmentForms.push(createEquipmentForm(equipmentType));
                        })

                        return equipmentForms
                })

            const createEquipmentForm = (equipmentType: EquipmentType) => {
                const equipmentValues: EquipmentValuesForm = {
                    values: []
                }

                const equipmentForm: EquipmentForm = {
                    type: equipmentType.type,
                    equipment: equipmentValues 
                }
                const array: EquipmentItemsForm[] = []
                equipmentType.equipments.forEach((equipment: Equipment) => {
                    array.push({
                        id: equipment.id,
                        name: equipment.name,
                        value: false
                    })
                })

                equipmentValues.values = array
                return equipmentForm
            }
            store.dispatch('getEquipmentTypes')
            return { equipmentTypes, stateOptions, store, }
        }
    })
</script>

<style lang="scss" scoped>
    :deep(.p-accordion .p-accordion-header .p-accordion-header-link) {
    background-color: transparent !important;
    border: none !important;
    border-radius: 0 !important;
    border-bottom: 1px solid var(--secondary-300) !important; 
    }
    :deep(.p-accordion .p-accordion-content) {
        border-radius: 0 !important;
        border: none !important;
    }

    :deep(.p-accordion .p-accordion-header:not(.p-disabled) .p-accordion-header-link:focus) {
        box-shadow: none !important;
    }

    :deep(.p-accordion .p-accordion-content),
    :deep(.p-accordion .p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link),
    :deep(.p-accordion .p-accordion-header:not(.p-highlight):not(.p-disabled):hover .p-accordion-header-link),
    :deep(.p-accordion .p-accordion-header:not(.p-disabled).p-highlight:hover .p-accordion-header-link) {
        background-color: transparent !important;
    }

    .technical-data .row {
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

        :deep(.p-selectbutton) {
            margin-left: auto;
        }
    }
    

    .additional-technical-data {
        display: flex;
        flex-wrap: wrap;
        gap: 3vh;
        padding: 3vh 0;

        .row {
            width: 100%;
            display: flex;
            gap: 2vw;
        }    
    }

    .equipment-wrapper {
        height: fit-content;
    }

    .equipment-checkbox-wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 2vh;
    }

    .equipment-checkbox {
        width: 48%;
        border: 1px solid var(--secondary-300);
        padding: 10px;
        border-radius: 5px;
    }
</style>