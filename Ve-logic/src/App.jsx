//import { useState } from 'react';
import './App.css';
import Nav from '../src/Components/Nav/Nav';
import Header from '../src/Components/Header/Header';
import Hero from '../src/Components/Hero/Hero';
import Proyectos from '../src/Components/Proyectos/Proyectos';
import Form from '../src/Components/Form/Form';
import Footer from '../src/Components/Footer/Footer';

function App() {

  return (
    <div>
        <h1>VE Logic</h1>
      <Header />
      <Nav/>
      <Hero/>
      <Proyectos/>
      <Form/>
      <Footer/>
      
    </div>
  )
}

export default App
