import React, { useState } from "react";
import Layout from "../../Layout";
import { Link } from "react-router-dom";
import { CaretDown, CaretUp } from "phosphor-react";
import "./Faq.css";
import Explore from "../../Batches/Common/Explore";

function Question({ question }) {
  const initiallyOpen = question.id === 1 || question.id === 2;
  const [open, setOpen] = useState(initiallyOpen);

  const contentWithLineBreaks = question.content
    ? question.content.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))
    : null;

  return (
    <section
      className={`accordion ${open ? "open" : "closed"}`}
      id={`accordion-${question.id}`}
      onClick={() => setOpen(!open)}
    >
      <div className={open ? "open" : "closed"} id="accordion-two">
        <h2>{question.title}</h2>
        <button onClick={() => setOpen(!open)} className="btns">
          {open ? <CaretUp /> : <CaretDown />}
        </button>
      </div>
      {open && <p className="accordion-para">{contentWithLineBreaks}</p>}
    </section>
  );
}

function Faq() {
  const questions = [
    {
      id: 1,
      title: "Q-1:- Why should I go for IIT Academy?",
      content: `IIT Academy is one of the best JEE & NEET preparation institutes. IIT Academy provides students with the best education curriculum, innovative teaching methodology, study material and exam patterned test series.`,
    },
    {
      id: 2,
      title:
        " Q-2:- What medium of study does IIT Academy offer in JEE, NEET & Foundation courses?",
      content: `We deal in both English and Hindi medium in JEE & NEET. Classes will be separate for both English and Hindi medium students. Study material and test series also will be offered according to your choice of language medium.`,
    },
    {
      id: 3,
      title:
        "Q-3:- What special features does IIT Academy methodology contains and how does it assist to crack JEE & NEET exam?",
      content: `We, at IIT Academy developed the curriculum in such a manner that each topic and concept is taught in simple and sequential manner. We make students practice more with lots of questions and brain storming exercises, practice sheets and DPPs. Our test series is designed so thoughtfully which covers previous years JEE & NEET questions. Each test of our test series proves to be an asset when you are thinking about JEE & NEET. Questions are prepared by subject experts which matches the level of JEE & NEET examination.`,
    },
    {
      id: 4,
      title:
        " Q-4:- Will the preparation at IIT Academy help my ward to undertake JEE (Main/ Advanced) competently ?",
      content: `The course curriculum of IIT Academy will comprise of coverage of JEE (Main / Advanced) & NEET level questions of Physics, Chemistry, Mathematics and Biology. Preparation of JEE (Main / Advanced) & NEET at IIT Academy gives a student accuracy and confidence that is essential to qualify such exams.`,
    },
    {
      id: 5,
      title: "Q-5:- How can one get admission in IIT Academy?",
      content: `Admission is based on First cum First serve basis for the various programmes of JEE & NEET. You can know about IIT Academy, it's courses and other information either by dialing on: 8453307045/7366831500 or you can visit us at our corporate office. IIT Academy' s website can also assist you getting detailed information regarding admission.`,
    },
    {
      id: 6,
      title: "Q-6:- What are the courses offered by IIT Academy?",
      content: `IIT Academy offers different courses for different classes both offline and online. (Yet to add)`,
    },
    {
      id: 7,
      title:
        "Q-7:- How shall we come to know about our ward's attendance & performance ?",
      content: `At IIT Academy, we offer the mentioned services to keep the parents informed and updated about their ward's performance and attendance. Student's Attendance in Regular Classes: We do take the attendance of students coming to the class on a daily basis. Any student whosoever is found absent in the class without any prior intimation or a sanctioned leave then a SMS will be sent on the parent's mobile number of that student intimating them about their ward’s absence. In case, of a long absenteeism, the parents are informed telephonically. The same procedure is followed in the periodic tests. Student's Academic Performance: A Personal telephonic communication to the parents about the ward’s performance is also made by the institute. Result of each test is sent by text messages to the registered phone number of parents.`,
    },
    {
      id: 8,
      title: "Q-8:- Can I prepare for JEE/NEET from my home?",
      content: `Yes, you can prepare for JEE/NEET from your home with IIT Academy easily. With the help of digital technology & advance animation , you will be able to visualize and understand even toughest concepts easily at the comfort of your home.`,
    },
    {
      id: 9,
      title:
        "Q-9:- Does IIT Academy run courses for examinations like State level Engineering and Medical Exams and BITSAT?",
      content: `Yes, IIT Academy runs courses for examinations like State-level Engineering and Medical Exams and BITSAT. While our primary focus remains on preparing students for IIT-JEE/NEET, we also provide dedicated programs for these examinations. Our comprehensive teaching methodology ensures that students are well-prepared to excel in exams such as IIT-JEE (Main + Advanced), BITSAT, Bihar Combined Exams, WBJEE, Comedk, and other state-level engineering and medical entrance exams.`,
    },
    {
      id: 10,
      title:
        "Q-10:- Do I have to simultaneously enroll in any other institute which prepares me for my CLASS XII board examinations?",
      content: `No, we strictly advice all our prospective students not to enroll at any other institute for any purpose whatsoever. You will simply overload yourself with classes leaving no time for self studies and extra-curriculars. Over the years we have seen students who did not pay heed to our advice ends up confused and not performing to their optimum level.`,
    },
    {
      id: 11,
      title:
        "Q-11:- What about English-Core paper for which I'll be appearing in my BOARDS? Does IIT Academy prepare me for that as well?",
      content: `Yes, IIT Academy provides preparation support for the English-Core paper for your BOARDS as well. Along with our focus on competitive exams like IIT-JEE/NEET, we understand the importance of excelling in board examinations. Our experienced faculty ensures that students are well-prepared for their English-Core syllabus through detailed guidance, practice sessions, and mock tests, helping you achieve excellent results in your board exams.`,
    },
  ];

  return (
    <>
      <Layout title="FAQ - IIT Academy">
        <div className="container-accordian">
          <h1>Frequently Asked Questions</h1>
          <div className="questions">
            {questions.map((question) => (
              <Question key={question.id} question={question} />
            ))}
          </div>
        </div>
        <Explore />
      </Layout>
    </>
  );
}

export default Faq;
