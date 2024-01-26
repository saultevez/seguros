import React from 'react'
import Navbar from './components/Navbar/NavbarMain'
import {
    BrowserRouter as Router,
    Routes,
    Route
}
    from 'react-router-dom'
import Home from './pages'
import Contact from './pages/contact'
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
            <Route path='/otros-seguros' element={<OtrosSeguros />} />
            <Route path='/otros-seguros' element={<OtrosSeguros />} />
            <Route path='/formulario-enviado' element={<SubmisionConfirmation/>} />
          </Routes>
        </Router>
        <WhatsAppWidget CompanyIcon={CompanyIcon} phoneNumber="51992771375" companyName="DMV Broker" message="¡Hola! Déjanos tu consulta y te responderemos en breve" />
        </>
    )
}

export default App