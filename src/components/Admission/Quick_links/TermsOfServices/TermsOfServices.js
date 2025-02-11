import React, { useEffect } from "react";
import Layout from "../../../Layout";
import "./../Privacy_policy/PrivacyPolicy";
import Breadcrumb from "../../../Breadcrumbs";

const TermsAndCondition = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="Terms and Conditions - IIT Academy">
      <Breadcrumb />
      <div className="container">
        <h2 className="special">Terms and Conditions</h2>
        <div className="pap">
          <ol style={{ listStyleType: "decimal" }}>
            <li>You are seeking admission in your own interest and accord.</li>
            <li>
              You shall be fully responsible for any accident/mishappening
              occurring with you/by you, inside/outside the institute’s
              premises, and the institute will not be responsible in any manner.
            </li>
            <li>
              You shall be responsible for your rustication on grounds of
              misconduct, misuse of mobile phones, misuse of the internet, or
              any illegal and indecent activity.
            </li>
            <li>
              In case of your selection for Medical/Engineering Entrance
              Exams/NTSE & Olympiads, the institute reserves the right to use
              your name, photo, and other information for publicity purposes
              (Print & Electronic Media).
            </li>
            <li>
              IIT Academy has the right to declare your competitive exam results
              on all websites, social media, etc.
            </li>
            <li>
              You solemnly affirm that the institute has the right to send you
              emails (e-newsletters), SMS alerts, WhatsApp messages (Text,
              Images, Video, Documents), and posts on the mentioned
              communication details.
            </li>
            <li>
              You have read all the instructions of the Information Bulletin /
              available Online and agree to follow the instructions as
              applicable.
            </li>
            <li>
              Regarding refunds, the institute shall not be responsible until
              the course fee paid by the student or parent is credited into the
              institute’s Bank Account. If credited, the refund policy will be
              applicable as per the institute norms.
            </li>
            <li>
              Each student will be issued an ID card, which must be carried
              daily.
            </li>
            <li>
              If any student is absent for more than 15 days continuously
              without prior written application, he/she will be deemed to be
              expelled from the institute. No separate information will be sent
              to the parents, and no fee or part of the fee will be refunded in
              such cases.
            </li>
            <li>
              Any change in address should be notified to the office without
              delay.
            </li>
            <li>
              The institute will assist in providing a conveyance facility;
              however, liability lies solely with the student.
            </li>
          </ol>
        </div>
      </div>
    </Layout>
  );
};

export default TermsAndCondition;
