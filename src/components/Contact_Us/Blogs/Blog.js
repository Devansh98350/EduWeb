import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import Layout from "./../../Layout";
import posts from "./Separate/Posts";
import monoblog from "../../../assets/homepage/monoblog.png";
import { IoIosVideocam } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import Breadcrumb from "../../Breadcrumbs";

// Function to truncate the HTML description to a maximum of 5 lines
const truncateDescription = (html) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = html; // Set the inner HTML to the passed HTML string
  const textContent = tempElement.textContent || tempElement.innerText; // Get text content
  const lines = textContent.split("\n"); // Split text into lines
  return lines.slice(0, 5).join("\n"); // Return the first 5 lines joined
};

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Breadcrumb />
      <div className="blog-page-second">
        <div className="blog-grid">
          {posts.map((post, index) => (
            // Mapping through the posts to create a blog card for each post
            <div className="blog-card zoomIn" key={index}>
              {/* Blog card header with tutorial label and date */}
              <div className="blog-row">
                <div className="icon-with-title">
                  <IoIosVideocam className="icon" />
                  <span className="sub-title">Blogs</span>
                </div>
                <span className="date">{post.date}</span>
              </div>

              {/* Blog title */}
              <div className="blog-row">
                <h2>{post.title}</h2>
              </div>

              {/* Blog description */}
              <div className="blog-row">
                <p>{truncateDescription(post.description)}</p>
              </div>

              {/* Blog footer with image and read more link */}
              <div className="blog-row card-footer">
                <div className="img-and-team">
                  <div className="img-container">
                    <img src={monoblog} alt="IIT Academy Team" />
                  </div>
                  <p>IIT Academy Team</p>
                </div>
                <Link to={post.link} className="read-more">
                  Read more <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
