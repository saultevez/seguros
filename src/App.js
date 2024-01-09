import React from 'react'
import Navbar from './components/navbar'
import {
    BrowserRouter as Router,
    Routes,
    Route
}
    from 'react-router-dom'
import Home from './pages'
import Contact from './pages/contact'
import FormularioHogar from './pages/Calculator/FormularioHogar/FormularioHogar'
import Ssalud from './pages/Calculator/seguroSalud'
import Svida from './pages/Calculator/seguroVida'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './index.css'

function App() {
    return (

        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/'  element={<Home />} />
                <Route path='/seguro-contra-accidentes' element={<FormularioHogar />} />
                <Route path='/seguro-salud' element={<Ssalud />} />
                <Route path='/seguro-vida' element={<Svida />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>

        </Router>



    )
}

export default App