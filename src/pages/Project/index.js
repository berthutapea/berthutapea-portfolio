import React, { useEffect, useState } from "react";
import Items from "../../Utils/Items";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link, useLocation } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import "./Project.css";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../hooks/useAnimation";
import {BottomLine} from "../../components";

const Project = () => {
  const [items, setItems] = useState(Items);
  const [activeBtn, setActiveBtn] = useState("all");
  const location = useLocation();
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
    if (location.pathname === "/" && items.length > 3) {
      setItems(items.slice(0, 3));
    }
  }, [inView, animation, location, items]);

  const filterItem = (category) => {
    const filtered = Items.filter((item) => item.category === category);
    setItems(filtered);
    if (filtered.length > 3 && location.pathname === "/") {
      setItems(filtered.slice(0, 3));
    }
  };

  return (
    <div className={`${location.pathname !== "/" && "pt-16"}`}>
      <div className="parent py-12">
        <motion.div
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={headingAnimation}
        >
          <div className="mb-12">
            <h3 className="text-neutral text-center">
              Some of my recent Projects
            </h3>
            <h1 className="text-4xl font-semibold text-center">
              Featured <span className="text-primary">Projects</span>
            </h1>
            <BottomLine />
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={sectionBodyAnimation}
        >
          <div className="mt-6 mb-2 flex items-center justify-center flex-wrap">
            <button
              className={`btn btn-sm bg-primary border-2 border-primary text-white hover:bg-transparent hover:border-primary duration-300 mx-3 my-3 sm:my-0 ${activeBtn === "all" && "active-btn"
                }`}
              onClick={() => {
                setActiveBtn("all");
                location.pathname === "/"
                  ? setItems(Items.slice(0, 3))
                  : setItems(Items);
              }}
            >
              All
            </button>
            <button
              className={`btn btn-sm bg-primary border-2 border-primary text-white hover:bg-transparent hover:border-primary duration-300 mx-3 my-3 sm:my-0 ${activeBtn === "business" && "active-btn"
                }`}
              onClick={() => {
                setActiveBtn("business");
                filterItem("business");
              }}
            >
              Business
            </button>
            <button
              className={`btn btn-sm bg-primary border-2 border-primary text-white hover:bg-transparent hover:border-primary duration-300 mx-3 my-3 sm:my-0 ${activeBtn === "personal" && "active-btn"
                }`}
              onClick={() => {
                setActiveBtn("personal");
                filterItem("personal");
              }}
            >
              Personal
            </button>
            <button
            className={`btn btn-sm bg-primary border-2 border-primary text-white hover:bg-transparent hover:border-primary duration-300 mx-3 my-3 sm:my-0 ${
              activeBtn === "game" && "active-btn"
            }`}
            onClick={() => {
              setActiveBtn("game");
              filterItem("game");
            }}
          >
            Game
          </button>
          </div>

          {/* Items Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <motion.div
                initial={{ x: 200, opacity: 0, scale: 0 }}
                animate={{
                  x: 0,
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.3 },
                }}
                key={item.id}
                className="item-container rounded-lg shadow-lg p-3 flex flex-col justify-between hover:shadow-primary duration-500"
                style={{ backgroundColor: "#313131" }}
              >
                <div className="item h-full">
                  <img
                    className="rounded-lg h-full w-full"
                    src={item.mainImage}
                    alt={item.title || "Item Image"}
                  />
                  <div className="overlay">
                    <h3 className="text-2xl text-primary font-semibold">
                      {item.title}
                    </h3>
                    <Link
                      to={`/project/${item.id}`}
                      className="mt-3 inline-block"
                    >
                      <button className="btn btn-sm border-2 border-transparent bg-primary hover:bg-transparent text-white hover:border-primary duration-500">
                        See Details
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {location.pathname === "/" && (
          <div className="mt-4 text-right">
            <Link
              to="/project"
              className="text-2xl hover:text-primary duration-300"
            >
              <button className="primary-button">
                <span>See All</span>
                <span>
                  <FiArrowRight />
                </span>
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
