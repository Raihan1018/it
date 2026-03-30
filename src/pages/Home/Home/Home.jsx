import React from "react";
import Hero from "../Hero/Hero";
import Features from "../Features/Features";
import DesignDevelopment from "../DesignDevelopment/DesignDevelopment";
import OurFeatures from "../OurFeatures/OurFeatures";
import Technologies from "../Technologies/Technologies";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <DesignDevelopment />
      <OurFeatures />
      <Technologies />
    </div>
  );
};

export default Home;
