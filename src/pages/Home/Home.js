import React from "react";
import Project from "../Project/Project";
import Banner from "./Banner/Banner";
import Service from "./Service/Service";
import Testimonial from "./Testimonial/Testimonial";
import Information from "./Information/Information";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div className="pt-16">
      <Banner />
      <Service />
      <Project />
      <Testimonial />
      <Information />
      <Contact />
    </div>
  );
};

export default Home;
