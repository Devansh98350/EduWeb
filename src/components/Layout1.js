import React from "react";
import { Toaster } from "react-hot-toast";
import Footer from "./Footer/Footer";
import Header from "../components/Header/Header.js";
import { Helmet } from "react-helmet";
import Advertisement from "./Home_page/Advertisement.js";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <div style={{ position: "relative", zIndex: 100 }}>
        <Header />
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          justifyContent: "center",
          width: "100%",
          zIndex: 101,
        }}
      >
        <Advertisement />
      </div>
      <main style={{ minHeight: "68.4vh", paddingTop: "5px" }}>
        <Toaster /> {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "IIT Academy",
  description: "Best Institute for JEE and NEET",
  keywords: "mern,react,node,mongodb",
  author: "Devanshu Kumar",
};

export default Layout;
