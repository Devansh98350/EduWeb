import React, { useEffect } from "react";
import Layout from "../../Layout";
import Details from "./components/Details";
import Header from "./components/Header";
import ScholarshipTest from "./components/ScholarshipTest";
import Thirdsec from "./components/Thirdsec";
import FAQ from "./components/FAQ";

const Our_Faculty = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout title="IAST-IIT Academy">
        <Header />
        <Details />
        <Thirdsec />
        <ScholarshipTest />
        <FAQ />
      </Layout>
    </>
  );
};

export default Our_Faculty;
