import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <div className='container'>
        <Programs></Programs>
    </div>
    
    
    </>
  )
}

export default App