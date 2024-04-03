<template>
<div class="main-search-container">
    <div className="content">
        <div class="form-content">
            <TabView>
                <TabPanel>
                    <template #header>
                        <div class="header">
                            <CarIcon />       
                            Osobowe
                        </div>
                    </template>

                    <!-- <CarSearchForm /> -->
                </TabPanel>
                <TabPanel>
                    <template #header>
                        <div class="header">
                            <MotorbikeIcon />
                            Motocykle
                        </div>
                    </template>
                </TabPanel>
            </TabView> 
        </div>
    </div>
</div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import CarIcon from 'vue-material-design-icons/Car.vue'  
    import MotorbikeIcon from 'vue-material-design-icons/Motorbike.vue'  
    import TabPanel from 'primevue/tabpanel';
    import TabView from 'primevue/tabview';

    export default defineComponent({
        name: 'MainSearchEngine',
        components: {
            CarIcon,
            MotorbikeIcon,
            TabPanel,
            TabView
        },
        setup() {

        },
    })

</script>

<style scoped lang="scss">
    .main-search-container {
        margin-top: 1px;    
        width: 100%;
        height: 50vh;
        background-image: url(../../assets/banner.jpg);
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: right 0px bottom -300px;
        display: flex;
        object-fit: contain;

        .content {
            width: 100%;
            margin: 0;
        }
        
        .form-content {
            width: 600px;
            height: 45vh;
            margin-left: 7vw;
            margin-top: 3vh;
            box-shadow: 0px 1px 3px var(--secondary-800);
            background-color: var(--main-100);
        }
        
        :deep(.p-tabview .p-tabview-panels) {
            height: 200px !important;
            flex-grow: 1 !important;
            background-color: var(--secondary-100) !important;
        }
        
        :deep(.p-tabview) {
            height: 100%;
            display: flex;
            flex-direction: column;
        }
        
        :deep(.p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link) {
            color: var(--main-400);
            background-color: var(--main-100);
        }
        
        :deep(.p-tabview .p-tabview-nav),
        :deep(.p-tabview .p-tabview-nav li .p-tabview-nav-link)  {
            font-family: 'Montserrat', sans-serif;
            background-color: var(--secondary-200);
            border-color: var(--secondary-200);
            color: var(--secondary-500);
            padding: 0 5px;
        }
        
        :deep(.p-tabview .p-tabview-nav li .p-tabview-nav-link:focus) {
            box-shadow: inset 0 0 0 0.2rem var(--main-200);
        }
        
        .header  {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0;
            margin: 0;
            width: 7vw;
            height: 5vh;
        }
    }
</style>