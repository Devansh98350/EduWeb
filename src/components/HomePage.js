import React, { useEffect } from "react";
import Layout from "./Layout";
import OurCourses from "./OurCourses";
import main from "../assets/homepage/main.png";
// import { useAuth } from "../context/auth";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // const { auth } = useAuth();
  return (
    <>
      <Layout>
        {/* <pre>{JSON.stringify(auth, null, 4)}</pre> */}
        <div className="homepic">
          <img src={main} alt="" className="logo-img" />
        </div>
        <OurCourses />
      </Layout>
    </>
  );
};

export default HomePage;
