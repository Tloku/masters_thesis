
import './main-search-engine.scss'
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { TabView, TabPanel } from 'primereact/tabview';

export const MainSearchEngineComponent: React.FC = () => {


    const carHeaderTemplate = () => {
        return (
            <div className="header">
                <DirectionsCarIcon />         
                Osobowe
            </div>
        );
    };

    const motorcycleHeaderTemplate = () => {
        return (
            <div className="header">
                <TwoWheelerIcon />
            
                Motocykle
            </div>
        );
    };


    return <>
        <div className="container">
            <div className="content">
                <div className="form-content">
                    <TabView>
                        <TabPanel headerTemplate={carHeaderTemplate} className="panel" header="Osobowe" leftIcon="pi pi-car">
                            {/* <car-search-form></car-search-form> */}
                        </TabPanel>
                        <TabPanel headerTemplate={motorcycleHeaderTemplate} className="panel" header="Motocykle">
                           {/* <motocycle-search-form></motocycle-search-form> */}
                        </TabPanel>
                    </TabView>
                </div>
            </div>
        </div>
    </>
}