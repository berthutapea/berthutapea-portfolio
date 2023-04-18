import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BiPalette } from "react-icons/bi";
import { DiAtom } from "react-icons/di";
import { FiServer } from "react-icons/fi";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../../hooks/useAnimation";
import BottomLine from "../../../components/BottomLine/BottomLine";

const Service = () => {
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const services = [
    {
      id: 1,
      title: "Front End Development",
      icon: <DiAtom />,
      description:
        "As a Front-end developer, I would love to develope any front-end application using React and its libraries.",
    },
    {
      id: 2,
      title: "MERN Development",
      icon: <FiServer />,
      description:
        "I am very familiar with NodeJS, Express JS, and MongoDB/Mongoose. So I can build full-stack application with MERN.",
    },
    {
      id: 3,
      title: "Web Design",
      icon: <BiPalette />,
      description:
        "I also provide Fully Responsive Static Website Design with HTML, CSS, Bootstrap, Tailwind.",
    },
    // {
    //   id: 4,
    //   title: "Web Management",
    //   icon: <FiServer />,
    //   description:
    //     "I will manage any kinds of website. Data Management, Component management, Service management and so on.",
    // },
    // {
    //   id: 5,
    //   title: "Backend Development",
    //   icon: <FiServer />,
    //   description:
    //   "MVC Architectural Backend Development with Mongoose (Schema, Model etc) to manage the server easily.",
    // },
    // {
    //   id: 6,
    //   title: "Database Management",
    //   icon: <FiServer />,
    //   description:
    //     "Connecting Web Database to the server. Fixing All kinds of issue with related to database with database advanced operators.",
    // },
  ];
  return (
    <div className="parent py-20"
      style={{ backgroundColor: "#313131" }}
    >
      <motion.div
        className="mb-12"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-neutral text-center">What I Provide</h3>
        <h1 className="text-4xl font-semibold text-center">
          My <span className="text-primary">Services</span>
        </h1>
        <BottomLine />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        ref={ref}
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={sectionBodyAnimation}
      >
        {services?.map((service) => (
          <div
            key={service.id}
            className={`${service.id % 2 === 0
              ? "bg-[#313131] shadow-md"
              : "bg-accent shadow-lg"
              } rounded-lg p-6 hover:shadow-primary cursor-pointer duration-300`}
          >
            <div className="text-center mb-4">
              <span className="text-primary text-5xl inline-block">
                {service.icon}
              </span>
            </div>
            <h2 className="text-2xl font-semibold text-center mb-4">
              {service.title}
            </h2>
            <p className="text-neutral">{service.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Service;
