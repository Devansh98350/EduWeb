import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import PagenotFound from "./components/PagenotFound";
import "./App.css";
import AdmissionEnquiry from "./components/AdmissionEnquiry";
import AdmissionProcess from "./components/AdmissionProcess";
import PrivacyPolicy from "./components/PrivacyPolicy";
import AboutIitAcademy from "./components/AboutIitAcademy";
import AboutDirector from "./components/AboutDirector";
import DirectorMess from "./components/DirectorMessage";
import WhyIitAcademy from "./components/WhyIitAcademy";
import Faculty from "./components/Faculty";
import RiJeeing from "./components/RiJeeing";
import JEEneous from "./components/JEEneous";
import Medilite from "./components/Medilite";
import NEETmed from "./components/NEETmed";
import Foundation from "./components/Foundation";
import ExcelX from "./components/ExcelX";
import StudentLogin from "./components/StudentLogin";
import FacultyLogin from "./components/FacultyLogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path=" " element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about-iit-academy" element={<AboutIitAcademy />} />
        <Route path="/about-director-iit-academy" element={<AboutDirector />} />
        <Route
          path="/director-message-iit-academy"
          element={<DirectorMess />}
        />
        <Route path="/why-iit-academy" element={<WhyIitAcademy />} />
        <Route
          path="/engineering-class-11-iit-academy"
          element={<RiJeeing />}
        />
        <Route
          path="/engineering-class-12-iit-academy"
          element={<JEEneous />}
        />
        <Route path="/medical-class-11-iit-academy" element={<Medilite />} />
        <Route path="/medical-class-12-iit-academy" element={<NEETmed />} />
        <Route
          path="/foundation-class-9-iit-academy"
          element={<Foundation />}
        />
        <Route path="/foundation-class-10-iit-academy" element={<ExcelX />} />
        <Route
          path="/admission-enquiry-iit-academy"
          element={<AdmissionEnquiry />}
        />
        <Route
          path="/admission-process-iit-academy"
          element={<AdmissionProcess />}
        />
        <Route path="/our-policy-iit-academy" element={<PrivacyPolicy />} />
        <Route path="/faculty-iit-academy" element={<Faculty />} />
        <Route path="/students-login-iit-academy" element={<StudentLogin />} />
        <Route path="/faculty-login-iit-academy" element={<FacultyLogin />} />
        <Route path="*" element={<PagenotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
