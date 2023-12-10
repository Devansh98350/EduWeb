import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import Contact from "./components/Contact_Us/Contact";
import PagenotFound from "./components/PagenotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path=" " element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        {/* About */}
        <Route path="/about-iit-academy" element={<AboutIitAcademy />} />
        <Route
          path="/director-message-iit-academy"
          element={<DirectorMess />}
        />
        <Route path="/why-iit-academy" element={<WhyIitAcademy />} />
        <Route path="/faculty-iit-academy" element={<Faculty />} />
        <Route
          path="/frequently-asked-questions-iit-academy"
          element={<FAQ />}
        />
        <Route path="/gallery-iit-academy" element={<Gallery />} />
        {/* Batches */}
        <Route path="/engineering-class-11-iit-academy" element={<Arjuna />} />
        <Route
          path="/engineering-class-12-iit-academy"
          element={<Chaitanya />}
        />
        <Route path="/engineering-class-13-iit-academy" element={<Eklavya />} />
        <Route path="/medical-class-11-iit-academy" element={<Ananta />} />
        <Route path="/medical-class-12-iit-academy" element={<Sudarshan />} />
        <Route path="/medical-class-13-iit-academy" element={<Swadhyaya />} />
        <Route path="/foundation-class-06-iit-academy" element={<Aadhya />} />
        <Route path="/foundation-class-07-iit-academy" element={<Abhinav />} />
        <Route path="/foundation-class-08-iit-academy" element={<Abhyas />} />
        <Route path="/foundation-class-09-iit-academy" element={<Aarohan />} />
        <Route path="/foundation-class-10-iit-academy" element={<Atal />} />
        <Route path="/distance-class-10-iit-academy" element={<Sankalp />} />
        <Route
          path="/distance-class-11-engg-iit-academy"
          element={<Utkarsh />}
        />
        <Route
          path="/distance-class-12-engg-iit-academy"
          element={<Lakshya />}
        />
        <Route
          path="/distance-class-13-engg-iit-academy"
          element={<Abhiyaan />}
        />
        <Route path="/distance-class-11-med-iit-academy" element={<Yukti />} />
        <Route
          path="/distance-class-12-med-iit-academy"
          element={<Sarthak />}
        />
        <Route path="/distance-class-13-med-iit-academy" element={<Pragya />} />
        <Route path="/boards-class-11-pcm-iit-academy" element={<Sammarsa />} />
        <Route path="/boards-class-12-pcm-iit-academy" element={<Vikash />} />
        <Route path="/boards-class-11-pcb-iit-academy" element={<Daksh />} />
        <Route path="/boards-class-12-pcb-iit-academy" element={<Samridhi />} />
        {/* Admission */}
        <Route path="/fees-structure" element={<Feestructure />} />
        <Route
          path="/admission-process-iit-academy"
          element={<AdmissionProcess />}
        />
        <Route
          path="/admission-enquiry-iit-academy"
          element={<AdmissionEnquiry />}
        />
        <Route path="/our-policy-iit-academy" element={<PrivacyPolicy />} />
        {/* Login Section */}
        <Route path="/students-login-iit-academy" element={<StudentLogin />} />
        <Route path="/faculty-login-iit-academy" element={<FacultyLogin />} />
        {/* Other */}
        <Route path="/contact-us-iit-academy" element={<Contact />} />
        <Route path="*" element={<PagenotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
