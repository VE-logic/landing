//import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Nav from '../src/Components/Nav/Nav';
import Header from './Components/Header/Header';
import Proyectos from './Pages/Proyectos/Proyectos';
// import Form from '../src/Components/Form/Form';
import Footer from '../src/Components/Footer/Footer';
// import Servicios  from './Pages/Servicios/Servicios';
import Inicio from './Pages/Home/Home';
import Contacto from './Pages/Contacto/Contacto';
import Servicios from './Pages/Servicios/Servicios';

function App() {

  return (
    <Router>
      <Header />
      <Nav/>
      <Routes>
        <Route path="/" exact element={<Inicio/>} />
        <Route path="/Servicios" element={<Servicios/>} />
        <Route path="/Proyectos" element={<Proyectos/>} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      
      <Footer/>
      
    </Router>
  )
}

export default App
