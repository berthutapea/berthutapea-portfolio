import React from "react";
import { useParams } from "react-router-dom";
import placeholderImage from "../../assets/placeholder.jpg";
import blogs from "../../assets/blogs";
import { useState } from "react";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FiExternalLink, FiLinkedin, FiGlobe } from "react-icons/fi";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinIcon,
} from "react-share";

const BlogDetail = () => {
  const { blog_path } = useParams();
  const [blog, setBlog] = useState({});
  const url = window.location.href;

  useEffect(() => {
    const current_blog = blogs.find((blog) => blog.path === blog_path);
    setBlog(current_blog);
  }, [blog_path]);

  return (
    <div className="mt-20">
      <h1 className="t text-center text-4xl">{blog?.title}</h1>
      <div className="text-center my-8">
        <LazyLoadImage
          placeholderSrc={placeholderImage}
          src={blog?.img}
          alt="Blog Main Image"
          className="main_blog_image"
        />
      </div>
      <div className="flex items-center justify-between flex-wrap mt-16 mb-4">
        <span>
          Author : <strong className="text-primary">Gilbert Hutapea</strong>
        </span>
        <span>
          Published at: <strong className="text-primary">{blog?.date}</strong>
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2 lg:col-span-3">
          {blog?.description?.split("\n")?.map((s, i) => (
            <>
              <p key={i + 1} className="text-neutral text-justify">
                {s}
              </p>{" "}
              <br />
            </>
          ))}
        </div>
        <div className="md:col-span-2 lg:col-span-1 bg-[#313131] px-4 py-6 rounded shadow-lg">
          <div className="">
            <h4 className="text-lg font-medium mb-3">Sponsor:</h4>
            <p className="flex items-center gap-3">
              <span>
                <FiGlobe />
              </span>
              <a
                href={blog?.website_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline flex items-center"
              >
                <span>Visit Website</span> <FiExternalLink />
              </a>
            </p>
            <p className="flex items-center gap-3">
              <span>
                <FiLinkedin />
              </span>
              <a
                href={blog?.linkedin_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline flex items-center"
              >
                <span>Visit LinkedIn</span> <FiExternalLink />
              </a>
            </p>
          </div>

          <div className="w-full h-[1px] bg-neutral my-6"></div>

          <h4 className="text-lg font-medium mb-3">
            Share with Social Media:{" "}
          </h4>
          <div className="flex items-center gap-4 flex-wrap">
            <EmailShareButton url={url} title="Email">
              <EmailIcon size={32} round={true} />
            </EmailShareButton>
            <FacebookShareButton url={url} title="Facebook">
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <TwitterShareButton url={url} title="Mern Blog by Gilbert Hutapea - ">
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <LinkedinShareButton url={url} title="Mern Blog by Gilbert Hutapea -">
              <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
            <WhatsappShareButton url={url} title="Mern Blog by Gilbert Hutapea -">
              <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
          </div>

          <div className="w-full h-[1px] bg-neutral my-6"></div>

          <h4 className="text-lg font-medium mb-3">Tags: </h4>
          <div>
            {blog?.tags?.map((tag) => (
              <button
                key={tag}
                className="bg-neutral bg-opacity-40 px-2 py-0 m-1 rounded"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
