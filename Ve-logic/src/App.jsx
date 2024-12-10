//import { useState } from 'react';
import './App.css';
import Nav from '../src/Components/Nav/Nav';
import Header from '../src/Components/Header/Header';
import Hero from '../src/Components/Hero/Hero';
import Proyectos from './Pages/Proyectos/Proyectos';
import Form from '../src/Components/Form/Form';
import Footer from '../src/Components/Footer/Footer';
import Servicios  from './Pages/Servicios/Servicios';

function App() {

  return (
    <div>
      <Header />
      <Nav/>
      <Hero/>
      <Servicios/>
      <Proyectos/>
      <Form/>
      <Footer/>
      
    </div>
  )
}

export default App
