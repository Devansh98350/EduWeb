import React from "react";
import excellence from "../../../assets/cbenefits/Excellent-Faculty.webp";
import computerbased from "../../../assets/cbenefits/Computer-Based-Test.webp";
import doubt from "../../../assets/cbenefits/Doubt-Classes.webp";
import improve from "../../../assets/cbenefits/Board-Exam-Preparation.webp";
import exam from "../../../assets/cbenefits/Competitive-Exam-Support.webp";
import dpp from "../../../assets/cbenefits/Daily-Practice-Problems.webp";
import periodic from "../../../assets/cbenefits/Periodic-Tests.webp";
import worksheet from "../../../assets/cbenefits/Board-Worksheets.webp";
import orientation from "../../../assets/cbenefits/Orientation-Classes.webp";
import performance from "../../../assets/cbenefits/Performance-Tracker.webp";
import feedback from "../../../assets/cbenefits/Feedback-System.webp";
import studymaterial from "../../../assets/cbenefits/Study-Material.webp";

const Benefits = () => {
  return (
    <div>
      <h1 className="heading">What are the Course Benefits?</h1>
      <div className="box-container">
        <div className="box">
          <span></span>
          <h4>Excellent Faculty</h4>
          <img src={excellence} alt=" " />
          <h4
            style={{
              fontWeight: "normal",
              textAlign: "center",
              fontSize: "16px;",
            }}
          >
            Outstanding and highly qualified faculty members who help students
            in every aspect of their study life.
          </h4>
        </div>
        <div className="box">
          <span></span>
          <h4>Computer Based Tests</h4>
          <img src={computerbased} alt=" " />
          <h4
            style={{
              fontWeight: "normal",
              textAlign: "center",
              fontSize: "16px;",
            }}
          >
            Online tests will be conducted as per the new change in the pattern,
            for better practice of our students.
          </h4>
        </div>
        <div className="box">
          <span></span>
          <h4>Doubt Classes</h4>
          <img src={doubt} alt=" " />
          <h4
            style={{
              fontWeight: "normal",
              textAlign: "center",
              fontSize: "16px;",
            }}
          >
            1 on 1 doubt classes are conducted for students to provide them with
            customized solution.
          </h4>
        </div>
        <div className="box">
          <span></span>
          <h4>Board Improvement Program</h4>
          <img src={improve} alt=" " />
          <h4
            style={{
              fontWeight: "normal",
              textAlign: "center",
              fontSize: "16px;",
            }}
          >
            Special board classes for the students who are improving in any
            subject of board.
          </h4>
        </div>
        <div className="box">
          <span></span>
          <h4>Competitive Exam Support</h4>
          <img src={exam} alt=" " />
          <h4
            style={{
              fontWeight: "normal",
              textAlign: "center",
              fontSize: "16px;",
            }}
          >
            Special classes are designed for other exams like Olympiads, KVPY.
            Study material are provided and regular tests are conducted.
          </h4>
        </div>
        <div className="box">
          <span></span>
          <h4>Daily Practice Problems</h4>
          <img src={dpp} alt=" " />
          <h4
            style={{
              fontWeight: "normal",
              textAlign: "center",
              fontSize: "16px;",
            }}
          >
            Designed for a student's self-understanding of a topic. DPPs are
            handed over daily to the students for practice after every session.
          </h4>
        </div>
        <div className="box">
          <span></span>
          <h4>Periodic Tests</h4>
          <img src={periodic} alt=" " />
          <h4
            style={{
              fontWeight: "normal",
              textAlign: "center",
              fontSize: "16px;",
            }}
          >
            Periodic Tests are conducted regularly, allowing students to solve
            all kinds of questions asked in the competitive exams of JEE.
          </h4>
        </div>
        <div className="box">
          <span></span>
          <h4>Board Worksheets</h4>
          <img src={worksheet} alt=" " />
          <h4
            style={{
              fontWeight: "normal",
              textAlign: "center",
              fontSize: "16px;",
            }}
          >
            On the basis of NCERT and State Boards, worksheets for students are
            created. This runs parallel with the course curriculum.
          </h4>
        </div>
        <div className="box">
          <span></span>
          <h4>Orientation Classes</h4>
          <img src={orientation} alt=" " />
          <h4
            style={{
              fontWeight: "normal",
              textAlign: "center",
              fontSize: "16px;",
            }}
          >
            Orientation classes are conducted for students to motivate them and
            make them familiar with the institute.
          </h4>
        </div>
        <div className="box">
          <span></span>
          <h4>Performance Tracker</h4>
          <img src={performance} alt=" " />
          <h4
            style={{
              fontWeight: "normal",
              textAlign: "center",
              fontSize: "16px;",
            }}
          >
            Every student's progress is tracked by giving a constant feedback on
            their performance in the tests.
          </h4>
        </div>
        <div className="box">
          <span></span>
          <h4>Regular Feedback System</h4>
          <img src={feedback} alt=" " />
          <h4
            style={{
              fontWeight: "normal",
              textAlign: "center",
              fontSize: "16px;",
            }}
          >
            Regular feedbacks are taken by the students in order to improve the
            learning process qualitatively and listens to all student's queries.
          </h4>
        </div>
        <div className="box">
          <span></span>
          <h4> Study Material </h4>
          <img src={studymaterial} alt=" " />
          <h4
            style={{
              fontWeight: "normal",
              textAlign: "center",
              fontSize: "16px;",
            }}
          >
            Topic-wise study material with all the key concepts, problems for
            practice and important questions are updated regularly.
          </h4>
        </div>
        {/* <div className="box">
            <span></span>
            <h4>Recorded Video Lecture</h4>
            <img src={video} alt=" " />
            <p>
              Students who have missed classes can watch recorded video lectures
              in computer lab to cover up the topics.
            </p>
          </div>
          <div className="box">
            <span></span>
            <h4>B:MUS (Make up classes)</h4>
            <img src={makeup} alt=" " />
            <p>
              Especially organized for the students who have missed the classes
              or have doubt in particular topic or chapter.
            </p>
          </div> */}
      </div>
    </div>
  );
};

export default Benefits;
