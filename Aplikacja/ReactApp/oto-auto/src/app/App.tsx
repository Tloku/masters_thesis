import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainPage } from '../pages/main/main-page'
import './App.scss'
import { NavbarComponent } from '../components/navbar/navbar'
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { OfferViewComponent } from '../pages/offer-view/offer-view';
import { CreateOfferPage } from '../pages/create-offer/create-offer.page';
        

function App() {
  return (
    <PrimeReactProvider>
      <>
        <div className='root'>
          <NavbarComponent />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage/>} />
              <Route path="/offer/:id" element={<OfferViewComponent />} />
              <Route path="new-offer" element={<CreateOfferPage />} />
            </Routes>
          </BrowserRouter>
        </div> 
      </>
    </PrimeReactProvider>
  )
}

export default App
