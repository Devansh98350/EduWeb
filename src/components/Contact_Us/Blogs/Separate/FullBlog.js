import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "./../../../Layout";
import DOMPurify from "dompurify";
import "./FullBlog.css";
import posts from "./Posts";
import Breadcrumb from "../../../Breadcrumbs";
import Explore from "../../../Batches/Common/Explore";
import Banner from "../../../Batches/Common/Banner";

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
        <Breadcrumb />
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
                // recentPosts.map((recentPost, index) => (
                //   <div key={index} className="recent-post">
                //     <img
                //       src={recentPost.image}
                //       alt="recent-blog"
                //       style={{ borderRadius: "5%" }}
                //     />
                //     <h4>{recentPost.title}</h4>
                //   </div>
                // ))
                recentPosts.map((recentPost, index) => (
                  <a
                    key={index}
                    href={recentPost.link}
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className="recent-post"
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={recentPost.image}
                        alt="recent-blog"
                        style={{ borderRadius: "5%" }}
                      />
                      <h4>{recentPost.title}</h4>
                    </div>
                  </a>
                ))
              ) : (
                // Message displayed if no recent posts are available
                <p>No recent posts available.</p>
              )}
            </div>
          </div>
        </div>
        <Banner />
        <Explore />
      </>
    </Layout>
  );
};

export default FullBlog;
