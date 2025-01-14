import React from "react";

import Hero from "../components/Hero/Hero";
import WeAre from "../components/WeAre/WeAre";
import Partners from "../components/Partners/Partners";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <WeAre />
      <Partners />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
