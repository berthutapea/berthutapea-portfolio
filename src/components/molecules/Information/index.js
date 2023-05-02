import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import placeholderImage from "../../../assets/placeholder.jpg";
import blogs from "../../../Utils/blogs";
import { BottomLine } from "../../../components";
import { FaAngleRight } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
    headingAnimation,
    sectionBodyAnimation,
} from "../../../hooks/useAnimation";

const Informasi = () => {
    const [currentPage] = useState(1);
    const [blogsPerPage] = useState(3);
    const [ref, inView] = useInView();
    const [viewDiv, setViewDiv] = useState(false);
    const animation = useAnimation();;
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogs
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(indexOfFirstBlog, indexOfLastBlog);

    useEffect(() => {
        if (inView) {
            setViewDiv(true);
        } else {
            setViewDiv(false);
        }
    }, [inView, animation]);

    return (
        <div className=" parent py-16">
            <motion.div
                initial="hidden"
                animate={viewDiv && "visible"}
                variants={headingAnimation}
            >
                <h1 className="text-3xl font-semibold text-center">
                    New <span className="text-primary">Information</span>
                </h1>
                <BottomLine />
            </motion.div>
            <div className="mt-10">
                <motion.div
                    className=" grid grid-cols-1 md:grid-cols-3 gap-8"
                    ref={ref}
                    initial="hidden"
                    animate={viewDiv && "visible"}
                    variants={sectionBodyAnimation}
                >
                    {currentBlogs.map((blog) => {
                        const { _id, title, date, img, description, path } = blog;
                        return (
                            <div
                                key={_id}
                                className="flex flex-col w-full items-center justify-between gap-8 rounded-lg min-h-32"
                            >
                                <div className="w-full">
                                    <Link to={"/blog/" + path}>
                                        <LazyLoadImage
                                            placeholderSrc={placeholderImage}
                                            src={img}
                                            className="rounded-lg blog_image cursor-pointer"
                                        />
                                    </Link>
                                </div>
                                <div className="w-full">
                                    <h2 className="text-[22px] font-medium text-white cursor-pointer hover:text-primary mt-[-25px]">
                                        <Link to={"/blog/" + path}>{title}</Link>
                                    </h2>
                                    <span className="text-gray-600 text-sm">
                                        <p>{date}</p>
                                    </span>
                                    <p className="text-neutral mt-1 mb-6">
                                        {description?.slice(0, 80)} ...
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
            <Link
                to="/blog"
                className="text-1xl hover:text-primary duration-300"
            >
                <button className="primary-button ">
                    <span>See All</span>
                    <span>
                        <FaAngleRight />
                    </span>
                </button>
            </Link>
        </div>
    );
};

export default Informasi;
