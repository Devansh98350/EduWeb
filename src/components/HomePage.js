import React, { useEffect } from "react";
import Layout from "./Layout";
import OurCourses from "./OurCourses";
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

        <OurCourses />
      </Layout>
    </>
  );
};

export default HomePage;
