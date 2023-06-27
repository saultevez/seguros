import React from 'react';
import './App.css';
import Navbar from './navbar';
import {
    BrowserRouter as Router,
    Routes,
    Route
}
    from 'react-router-dom';
import Home from './pages';
import Contact from './pages/contact';
import Saccidentes from './pages/seguroAccidentes';
import Ssalud from './pages/seguroSalud';
import Svida from './pages/seguroVida';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {
    return (

        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' exact element={<Home />} />
                <Route path='/seguro-contra-accidentes' element={<Saccidentes />} />
                <Route path='/seguro-salud' element={<Ssalud />} />
                <Route path='/seguro-vida' element={<Svida />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>

        </Router>



    );
}

export default App;