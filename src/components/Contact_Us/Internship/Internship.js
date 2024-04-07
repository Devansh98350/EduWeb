import React, { useEffect, useState } from "react";
import Layout from "../../Layout";
import Internship_form from "./../../Contact_Us/Internship/Internship_form/Internship_form.js";

const Internship = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [showForm, setShowForm] = useState(false);

  const handleApplyNowClick = () => {
    setShowForm(true);
  };
  return (
    <div>
      <Layout title="Internship-IIT Academy">
        Internship Page
        <Internship_form />
      </Layout>
    </div>
  );
};

export default Internship;
