import React from "react";
import Hero from "../Hero/Hero";
import Features from "../Features/Features";
import DesignDevelopment from "../DesignDevelopment/DesignDevelopment";
import OurFeatures from "../OurFeatures/OurFeatures";
import Technologies from "../Technologies/Technologies";
import WhyUs from "../WhyUs/WhyUs";
// import OurClient from "../OurClient/OurClient";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <DesignDevelopment />
      <OurFeatures />
      <Technologies />
      <WhyUs/>
      {/* <OurClient/> */}
    </div>
  );
};

export default Home;
