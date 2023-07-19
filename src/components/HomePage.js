import React, { useEffect } from "react";
import Layout from "./Layout";
// import { useAuth } from "../context/auth";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // const { auth } = useAuth();
  return (
    <>
      <Layout>
        <h1> HomePage</h1>
        {/* <pre>{JSON.stringify(auth, null, 4)}</pre> */}
      </Layout>
    </>
  );
};

export default HomePage;
