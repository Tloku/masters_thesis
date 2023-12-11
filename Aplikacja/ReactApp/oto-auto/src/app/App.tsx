import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainPage } from '../pages/main-page'
import './App.scss'
import { NavbarComponent } from '../components/navbar/navbar'

function App() {
  return (
  <>
    <div className='root'>
      <NavbarComponent />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>} />
        </Routes>
      </BrowserRouter>
    </div> 
  </>
  )
}

export default App
