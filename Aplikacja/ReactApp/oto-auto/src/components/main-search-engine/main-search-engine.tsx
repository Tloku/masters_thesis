
import './main-search-engine.scss'
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { TabView, TabPanel, TabPanelHeaderTemplateOptions } from 'primereact/tabview';
import { useState } from 'react';
import { classNames } from 'primereact/utils';
import { CarSearchForm } from '../forms/car-search-form/car-search-form';

export const MainSearchEngineComponent: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);


    const carHeaderTemplate = (options: TabPanelHeaderTemplateOptions) => {
        console.log(typeof options);
        const combinedClassName = classNames(options.className, 'header');
        return (
            <div onClick={options.onClick} className={combinedClassName} >
                <DirectionsCarIcon />         
                Osobowe
            </div>
        );
    };

    const motorcycleHeaderTemplate = (options: TabPanelHeaderTemplateOptions) => {
        const combinedClassName = classNames(options.className, 'header');
        return (
            <div onClick={options.onClick} className={combinedClassName}>
                <TwoWheelerIcon />
                Motocykle
            </div>
        );
    };


    return <>
        <div className="main-search-container">
            <div className="content">
                <div className="form-content">
                    <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                        <TabPanel headerTemplate={carHeaderTemplate}>
                            <CarSearchForm />
                        </TabPanel>
                        <TabPanel headerTemplate={motorcycleHeaderTemplate}>
                           {/* <motocycle-search-form></motocycle-search-form> */}
                            sadasdasd
                        </TabPanel>
                    </TabView> 
                </div>
            </div>
        </div>
    </>
}