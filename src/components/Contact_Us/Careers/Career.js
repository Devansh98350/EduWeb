import React, { useEffect, useState } from "react";
import Layout from "../../Layout";
import Career from "./../../Forms/Career_Form/Career";
import "./Career.css";

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [showForm, setShowForm] = useState(false);

  const handleApplyNowClick = () => {
    setShowForm(true);
  };
  return (
    <div>
      <Layout title="Careers-IIT Academy">
        <div className="career-page">
          <p className="career-main">Careers at IIT Academy</p>
          <p className="career-heading">Working at IIT Academy</p>
          <p className="career-description">
            Good people are the success of any Organization. In IIT Academy, it
            is our vision to bring together the best people and give them the
            best environment along with good career opportunities and growth. If
            your dreams are fuelled by a desire to make a contribution to the
            Education Sector, then move a step ahead.
          </p>
          <p className="career-description">
            We are looking for people who have an excellent attitude,
            perseverance, and a penchant to work in an environment charged with
            excellence and driven by values.
          </p>
          <p className="career-heading">IIT Academy Operation</p>
          <p className="career-description">
            IIT Academy’s operations are divided across various functional
            departments such as Academics (Physics, Chemistry and Mathematics,
            Biology, Science), Academic Operations, Strategy, Business
            Promotion, Admissions, Marketing, Advertising & Brand Management,
            Finance & Accounts, Personnel & Administration, HRD & Training, &
            Business Development.
          </p>
          <p className="career-description">
            IIT Academy is always on the lookout for talented, learned
            individuals who are ambitious, who love challenges, and who have a
            passion to excel, to be accommodated at various positions in our
            centres.
          </p>
          <p className="career-description">
            Towards this objective, IIT Academy hires people at entry level, mid
            level, and senior positions for the various above mentioned
            functional departments.
          </p>
          <p className="career-description">
            We aspire to make IIT Academy Family a peaceful, enjoyable,
            comfortable, and the best place to work, where every motivated and
            self-driven individual will bring in extraordinary results.
          </p>
          <p className="career-heading">Current Openings</p>
          <p className="career-description">
            i) Faculty for Foundation Division (Maths, Science, Social Science
            and English)
          </p>
          <p className="career-description">
            ii) Business Development Executive
          </p>
          <button className="apply1-now-button" onClick={handleApplyNowClick}>
            Apply Now
          </button>
          {showForm && <Career />}
          <p className="career-description" style={{ fontSize: "1.2em" }}>
            For any issues, mail us at{" "}
            <a href="mailto:info@iitacademy.in">info@iitacademy.in</a> or call
            us at <a href="tel:9205704041">9205704041</a>.
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default Careers;
