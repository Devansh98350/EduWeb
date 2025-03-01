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
import IAST from "./components/About/IAST//Iast";
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
import Board from "./components/Batches/Promo/Board.js";
/*Admission*/
import Feestructure from "./components/Admission/Fee_structure/Feestructure";
import AdmissionProcess from "./components/Admission/Process/Admission_process";
// Pay Fee Online
import AdmissionEnquiry from "./components/Admission/Enquiry/Admission_enquiry";
import PrivacyPolicy from "./components/Admission/Quick_links/Privacy_policy/PrivacyPolicy";
import TermsAndCondition from "./components/Admission/Quick_links/TermsOfServices/TermsOfServices";
import RefundCancellation from "./components/Admission/Quick_links/RefundCancellation/RefundCancellation";
import FeedbackGrievances from "./components/Admission/Quick_links/Feedback/Feedback";
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
          <Route path="/about-iit-academy" element={<AboutIitAcademy />} />
          <Route path="/director-message" element={<DirectorMess />} />
          <Route path="/why-iit-academy" element={<WhyIitAcademy />} />
          <Route path="/iit-academy-scholarship-test" element={<IAST />} />
          <Route path="/frequently-asked-questions" element={<FAQ />} />
          <Route path="/gallery" element={<Gallery />} />
          {/*Promo Batches */}
          <Route path="/engineering-batches" element={<Eng />} />
          <Route path="/medical-batches" element={<Med />} />
          <Route path="/foundation-batches" element={<Found />} />
          <Route path="/board-batches" element={<Board />} />
          {/* Batches */}
          <Route
            path="/engineering-batches/arjuna-class-11"
            element={<Arjuna />}
          />
          <Route
            path="/engineering-batches/chaitanya-class-12"
            element={<Chaitanya />}
          />
          <Route
            path="/engineering-batches/eklavya-class-13"
            element={<Eklavya />}
          />
          <Route path="/medical-batches/ananta-class-11" element={<Ananta />} />
          <Route
            path="/medical-batches/sudarshan-class-12"
            element={<Sudarshan />}
          />
          <Route
            path="/medical-batches/swadhyaya-class-13"
            element={<Swadhyaya />}
          />
          <Route
            path="/foundation-batches/aadhya-class-06"
            element={<Aadhya />}
          />
          <Route
            path="/foundation-batches/abhinav-class-07"
            element={<Abhinav />}
          />
          <Route
            path="/foundation-batches/abhyas-class-08"
            element={<Abhyas />}
          />
          <Route
            path="/foundation-batches/aarohan-class-09"
            element={<Aarohan />}
          />
          <Route path="/foundation-batches/atal-class-10" element={<Atal />} />
          <Route
            path="/foundation-batches/sankalp-class-10-distance"
            element={<Sankalp />}
          />
          <Route
            path="/engineering-batches/utkarsh-class-11-distance"
            element={<Utkarsh />}
          />
          <Route
            path="/engineering-batches/lakshya-class-12-distance"
            element={<Lakshya />}
          />
          <Route
            path="/engineering-batches/abhiyaan-class-13-distance"
            element={<Abhiyaan />}
          />
          <Route
            path="/medical-batches/yukti-class-11-distance"
            element={<Yukti />}
          />
          <Route
            path="/medical-batches/sarthak-class-12-distance"
            element={<Sarthak />}
          />
          <Route
            path="/medical-batches/pragya-class-13-distance"
            element={<Pragya />}
          />
          <Route
            path="/board-batches/sammarsa-class-11-pcm"
            element={<Sammarsa />}
          />
          <Route
            path="/board-batches/vikash-class-12-pcm"
            element={<Vikash />}
          />
          <Route path="/board-batches/daksh-class-11-pcb" element={<Daksh />} />
          <Route
            path="/board-batches/samridhi-class-12-pcb"
            element={<Samridhi />}
          />
          {/* Admission */}
          <Route path="/fees-structure" element={<Feestructure />} />
          <Route path="/admission-process" element={<AdmissionProcess />} />
          <Route path="/admission-enquiry" element={<AdmissionEnquiry />} />
          <Route path="/our-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
          <Route path="/refund-rules" element={<RefundCancellation />} />
          <Route path="/feedback-grievances" element={<FeedbackGrievances />} />
          {/* Login Section */}
          <Route path="/students-login" element={<StudentLogin />} />
          <Route path="/faculty-login" element={<FacultyLogin />} />
          {/* Other */}
          <Route path="/admission-form" element={<Admissionform />} />
          {/*<Route path="/contact-us" element={<Contact />} />*/}
          <Route path="/careers" element={<Career />} />
          <Route path="/careers/:domain" element={<JobListing />} />
          <Route
            path="/careers/:domain/application-form"
            element={<JobApplication />}
          />
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
