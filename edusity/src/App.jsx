import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <div className='container'>
        <Title subTitle='Our Program'  title='What We Offer'/> 
        <Programs></Programs>
    </div>
    
    
    </>
  )
}

export default App