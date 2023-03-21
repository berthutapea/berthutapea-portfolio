import React from "react";
import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import "./About.css";
import "../../components/PrimaryBtn.css";
import "../shared/Shared.css";
import BottomLine from "../../components/BottomLine";
import MySkill from "./MySkill";
import Education from "./Education";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <div className="parent pt-16 my-16">
      <div className="">
        <motion.div
          className="mb-12"
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, type: "spring" },
          }}
        >
          <h3 className="text-neutral text-center">Something About Myself</h3>
          <h1 className="text-4xl font-semibold drop-shadow-md text-center">
            About <span className="text-primary">Me</span>
          </h1>
          <BottomLine />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <img
              src="https://i.ibb.co/TrfBP9b/Gilbert-Hutapea.png"
              alt="Gilbert Hutapea"
              className="mx-auto"
            />
          </motion.div>
          <motion.div
            className=""
            initial={{ x: 200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <h1 className="text-4xl font-semibold mb-0">Gilbert Hutapea</h1>
            <div className="my-8">
              <TypeAnimation
                className="text-2xl text-primary font-bold"
                cursor={true}
                sequence={[
                  "A Front-end Developer",
                  2000,
                  "A React JS Developer",
                  2000,
                  "A Mern-stack Developer",
                  2000,
                ]}
                wrapper="div"
                repeat={Infinity}
              />
            </div>
            <p className="text-neutral font-medium">
              Dedicated Front-end developer. Capable to solve working problems.
              Passionate about learning & development to reach the target. Eager
              to tackle more complex problems and continue to find ways to
              maximize user efficiency.
            </p>
            <br />
            <p className="text-neutral font-medium">
              My next mission is how to become a Mern stack Developer. I would
              love to build some Giant Website which will shine myself.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 mt-4">
              <h2 className="font-medium">
                <span className="mr-4 text-primary">Name : </span>Gilbert Hutapea
              </h2>
              <h2 className="font-medium">
                <span className="mr-4 text-primary">Phone : </span>+62 823 6148 4992
              </h2>
              <h2 className="font-medium">
                <span className="mr-4 text-primary">Email : </span>
                berthutapea@gmail.com
              </h2>
              <h2 className="font-medium">
                <span className="mr-4 text-primary">Address : </span>Karawang, Jawa Barat, Indonesia
              </h2>
              <a
                // href="https://drive.google.com/file/d/1qVQ1OLO-5RxHy1rwbe5Ib9igCTfeO99f/view?usp=sharing"
                target="blank"
              >
                <button className="primary-button">
                  <span>My Resume</span>
                  <span>
                    <FaDownload />
                  </span>
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* My Skill */}
      <MySkill />

      {/* Education */}
      <Education />
    </div>
  );
};

export default About;
