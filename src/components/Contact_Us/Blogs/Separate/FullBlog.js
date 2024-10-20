import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "./../../../Layout";
import { FaRegKeyboard } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa";
import DOMPurify from "dompurify";
import "./FullBlog.css";
import posts from "./Posts";

const FullBlog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Extracting the postId from the URL parameters
  const { link } = useParams();
  const post = posts.find((p) => p.link === `/blogs/${link}`);

  if (!post) {
    return <h2>Post not found</h2>;
  }

  const sanitizedDescription = DOMPurify.sanitize(post.description);
  const recentPosts = posts.filter((p) => p.link !== post.link);

  return (
    <Layout>
      <>
        <div className="container-fluid fullBlog-second">
          <div className="row">
            {/* Main blog content section */}
            <div className="col-md-8 fullBlog">
              <div className="fullBlogTitle">
                <h3>{post.title}</h3>
                <p>
                  <span>{post.date}</span> | <span>Blogs</span>
                </p>
                {/* Displaying the main blog image */}
                <div className="img-container">
                  <img src={post.image} alt="blog" />
                </div>
              </div>

              {/* Rendering the sanitized blog description */}
              <div
                className="fullBlogDescription"
                dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
              />
            </div>

            {/* Recent posts section */}
            <div className="col-md-4 fullBlog-right">
              <h3>Recent Posts</h3>
              {recentPosts.length > 0 ? (
                // Mapping over the recent posts to display them
                recentPosts.map((recentPost, index) => (
                  <div key={index} className="recent-post">
                    <img src={recentPost.image} alt="recent-blog" />
                    <h4>{recentPost.title}</h4>
                  </div>
                ))
              ) : (
                // Message displayed if no recent posts are available
                <p>No recent posts available.</p>
              )}
            </div>
          </div>
        </div>

        <div className="container-fluid fullBlog-third">
          <h3>What to do next? Ask Our experts in a Free Counselling</h3>
          <p>
            24 Years of Excellence in Classes for Medical | IIT-JEE, Now learn
            from the best teachers of India
          </p>
          <div className="button-container">
            <button className="btn">
              <FaRegKeyboard className="icon" />
              Enroll Now
            </button>
            <button className="btn">
              <FaHeadphones className="icon" />
              Contact Us
            </button>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default FullBlog;
