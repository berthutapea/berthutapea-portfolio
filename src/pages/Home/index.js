import React from "react";
import Project from "../Project";
import { Banner, Testimonial, Information, Service } from "../../components";
// import Service from "./Service/Service";
// import Testimonial from "./Testimonial/Testimonial";
// import Information from "../../components/molecules/Banner/Information/Information";
import Contact from "../Contact";

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
