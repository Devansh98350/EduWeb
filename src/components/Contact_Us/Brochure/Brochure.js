import React, { useEffect } from "react";
import Layout from "../../Layout";

const Brochure = () => {
  useEffect(() => {
    window.location.href =
      "https://drive.google.com/file/d/1KEbgiKjF3quvUXWp8hM0KlDqeqZiL0LL/view?usp=sharing";
  }, []);

  return (
    <div>
      <Layout title="Brochure-IIT Academy"></Layout>
    </div>
  );
};

export default Brochure;
