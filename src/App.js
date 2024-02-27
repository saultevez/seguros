import React from 'react'
import Navbar from './components/Navbar/NavbarMain'
import {
    BrowserRouter as Router,
    Routes,
    Route
}
    from 'react-router-dom'
import Home from './pages'
import FormularioVehicular from './pages/Calculator/FormularioVehicular/FormularioVehicular'
import FormularioHogar from './pages/Calculator/FormularioHogar/FormularioHogar'
import FormularioVida from './pages/Calculator/FormulatrioVida/FormularioVida'
import FormularioSalud from './pages/Calculator/FormularioSalud/FormularioSalud'
import OtrosSeguros from './pages/OtrosSeguros/OtrosSeguros'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { ReactComponent as CompanyIcon } from './assets/img/logo.svg'
import { WhatsAppWidget } from 'react-whatsapp-widget'
import SubmisionConfirmation from './pages/Calculator/components/SubmisionConfirmation'
import 'react-whatsapp-widget/dist/index.css'
import './index.css'
import './assets/css/transitions.css'

function App() {
    return (
        <>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/'  element={<Home />} />
            <Route path='/seguro-hogar' element={<FormularioHogar />} />
            <Route path='/seguro-salud' element={<FormularioSalud />} />
            <Route path='/seguro-vida' element={<FormularioVida />} />
            <Route path='/seguro-vehicular' element={<FormularioVehicular />} />
            <Route path='/otros-seguros' element={<OtrosSeguros />} />
            <Route path='/formulario-enviado' element={<SubmisionConfirmation/>} />
          </Routes>
        </Router>
        <WhatsAppWidget CompanyIcon={CompanyIcon} phoneNumber="51970177742" companyName="DMV Broker" message="¡Hola! Déjanos tu consulta y te responderemos en breve" />
        </>
    )
}

export default App