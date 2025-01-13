import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./components/i18n";

import HomePage from "./components/Home_page/Home";
// import "./App.css";
/*About*/
import AboutIitAcademy from "./components/About/IIT_Academy/IIT_Academy";
import DirectorMess from "./components/About/Welcome_message/Message";
import WhyIitAcademy from "./components/About/Why_IIT_Academy/WhyIit";
import Faculty from "./components/About/Faculty/Our_Faculty";
import FAQ from "./components/About/FAQ/Faq";
import Gallery from "./components/About/Gallery/Gallery";
/*Batches*/
import Arjuna from "./components/Batches/Engineering/E_Eleven";
import Chaitanya from "./components/Batches/Engineering/E_Twelve";
import Eklavya from "./components/Batches/Engineering/E_Thirteen";
import Ananta from "./components/Batches/Medical/M_Eleven";
import Sudarshan from "./components/Batches/Medical/M_Twelve";
import Swadhyaya from "./components/Batches/Medical/M_Thirteen";
import Aadhya from "./components/Batches/Foundation/F_Six";
import Abhinav from "./components/Batches/Foundation/F_Seven";
import Abhyas from "./components/Batches/Foundation/F_Eight";
import Aarohan from "./components/Batches/Foundation/F_Nine";
import Atal from "./components/Batches/Foundation/F_Ten";
import Sankalp from "./components/Batches/Distance/D_Ten";
import Utkarsh from "./components/Batches/Distance/D_E_Eleven";
import Lakshya from "./components/Batches/Distance/D_E_Twelve";
import Abhiyaan from "./components/Batches/Distance/D_E_Thirteen";
import Yukti from "./components/Batches/Distance/D_M_Eleven";
import Sarthak from "./components/Batches/Distance/D_M_Twelve";
import Pragya from "./components/Batches/Distance/D_M_Thirteen";
import Sammarsa from "./components/Batches/Boards/B_PCM11";
import Vikash from "./components/Batches/Boards/B_PCM12";
import Daksh from "./components/Batches/Boards/B_PCB11";
import Samridhi from "./components/Batches/Boards/B_PCB12";
/*Promo Batches*/
import Eng from "./components/Batches/Promo/Eng.js";
import Med from "./components/Batches/Promo/Med.js";
import Found from "./components/Batches/Promo/Found.js";
/*Admission*/
import Feestructure from "./components/Admission/Fee_structure/Feestructure";
import AdmissionProcess from "./components/Admission/Process/Admission_process";
// Pay Fee Online
import AdmissionEnquiry from "./components/Admission/Enquiry/Admission_enquiry";
import PrivacyPolicy from "./components/Admission/Privacy_policy/PrivacyPolicy";
/*Login*/
import StudentLogin from "./components/Login/Student/Student_Login";
import FacultyLogin from "./components/Login/Faculty/Faculty_Login";
/*Others*/
import Admissionform from "./components/Forms/Admission_Form/Admission";
// import Contact from "./components/Contact_Us/ContactUs/Contact";
import Career from "./components/Contact_Us/Careers/Career";
import JobListing from "./components/Contact_Us/Careers/components/Listing/JobListing";
import JobApplication from "./components/Contact_Us/Careers/components/Apply/JobApplication";
import Internship from "./components/Contact_Us/Internship/Internship";
import Brochure from "./components/Contact_Us/Brochure/Brochure.js";
import Blog from "./components/Contact_Us/Blogs/Blog";
import FullBlog from "./components/Contact_Us/Blogs/Separate/FullBlog";
import PagenotFound from "./components/PagenotFound";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      {" "}
      <Router>
        <Routes>
          {/*<Route path=" " element={<HomePage />} />*/}
          <Route path="/" element={<HomePage />} />
          {/* About */}
          <Route path="/about" element={<AboutIitAcademy />} />
          <Route path="/director-message" element={<DirectorMess />} />
          <Route path="/why-us" element={<WhyIitAcademy />} />
          <Route path="/our-faculty" element={<Faculty />} />
          <Route path="/frequently-asked-questions" element={<FAQ />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* Batches */}
          <Route path="/engineering-class-11" element={<Arjuna />} />
          <Route path="/engineering-class-12" element={<Chaitanya />} />
          <Route path="/engineering-class-13" element={<Eklavya />} />
          <Route path="/medical-class-11" element={<Ananta />} />
          <Route path="/medical-class-12" element={<Sudarshan />} />
          <Route path="/medical-class-13" element={<Swadhyaya />} />
          <Route path="/foundation-class-06" element={<Aadhya />} />
          <Route path="/foundation-class-07" element={<Abhinav />} />
          <Route path="/foundation-class-08" element={<Abhyas />} />
          <Route path="/foundation-class-09" element={<Aarohan />} />
          <Route path="/foundation-class-10" element={<Atal />} />
          <Route path="/distance-class-10" element={<Sankalp />} />
          <Route path="/distance-class-11-engineering" element={<Utkarsh />} />
          <Route path="/distance-class-12-engineering" element={<Lakshya />} />
          <Route path="/distance-class-13-engineering" element={<Abhiyaan />} />
          <Route path="/distance-class-11-medical" element={<Yukti />} />
          <Route path="/distance-class-12-medical" element={<Sarthak />} />
          <Route path="/distance-class-13-medical" element={<Pragya />} />
          <Route path="/boards-class-11-pcm" element={<Sammarsa />} />
          <Route path="/boards-class-12-pcm" element={<Vikash />} />
          <Route path="/boards-class-11-pcb" element={<Daksh />} />
          <Route path="/boards-class-12-pcb" element={<Samridhi />} />
          {/*Promo Batches */}
          <Route path="/engineering-courses" element={<Eng />} />
          <Route path="/medical-courses" element={<Med />} />
          <Route path="/foundation-courses" element={<Found />} />
          {/* Admission */}
          <Route path="/fees-structure" element={<Feestructure />} />
          <Route path="/admission-process" element={<AdmissionProcess />} />
          <Route path="/admission-enquiry" element={<AdmissionEnquiry />} />
          <Route path="/our-policy" element={<PrivacyPolicy />} />
          {/* Login Section */}
          <Route path="/students-login" element={<StudentLogin />} />
          <Route path="/faculty-login" element={<FacultyLogin />} />
          {/* Other */}
          <Route path="/admission-form" element={<Admissionform />} />
          {/*<Route path="/contact-us" element={<Contact />} />*/}
          <Route path="/careers" element={<Career />} />
          <Route path="/job-description/:domain" element={<JobListing />} />
          <Route path="/job-application/:domain" element={<JobApplication />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/brochure" element={<Brochure />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:link" element={<FullBlog />} />
          <Route path="*" element={<PagenotFound />} />
        </Routes>
      </Router>
    </I18nextProvider>
  );
}

export default App;
