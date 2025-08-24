import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title subTitle="Our Program" title="What We Offer" />
        <Programs></Programs>
        <About></About>
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus></Campus>
        <Title subTitle="TESTIMONIALS" title="What Student Says" />
        <Testimonials></Testimonials>
        <Title subTitle="Contact Us" title="Get in Touch" />
      </div>
    </>
  );
}

export default App;
