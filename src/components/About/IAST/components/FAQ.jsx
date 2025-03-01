import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const styles = {
    sectionStyle: {
      padding: "20px",
      // paddingTop: "calc(20px + 50px)",
      backgroundColor: "#ffffff",
      fontFamily: "Segoe UI",
      lineHeight: "1.6",
      textAlign: "justify",
      overflowX: "hidden",
    },
    faqContainer: {
      marginTop: "40px",
      maxWidth: "95%",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    },
    faqHeading: {
      color: "blue",
      fontSize: "32px",
      fontWeight: "700",
      textAlign: "center",
      lineHeight: "48px",
    },
    faq: {
      marginBottom: "10px",
      borderBottom: "1px solid #ccc",
      paddingBottom: "10px",
    },
    question: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      cursor: "pointer",
      margin: 0,
    },
    questionText: {
      fontSize: "16px",
      lineHeight: "1",
      fontWeight: "700",
      color: "black",
      paddingTop: "10px",
      paddingBottom: "-10px",
    },
    icon: {
      fontSize: "24px",
      color: "#333",
      transition: "transform 0.2s, color 0.2s",
    },
    iconActive: {
      transform: "rotate(45deg)",
      color: "#007bff",
    },
    answer: {
      display: "none",
      padding: "0px",
      color: "red",
      fontSize: "16px",
      fontFamily: "Segoe UI",
    },
    answerVisible: {
      display: "block",
    },
    pstyle: {
      paddingTop: "0",
      marginTop: "0%",
      fontSize: "16px",
      fontFamily: "Segoe UI",
    },
  };

  const faqData = [
    {
      question: "What is IAST?",
      answer:
        "IAST (IIT Academy Scholarship Test) is a scholarship program that offers students moving to class 10th, 11th & 12th the opportunity to earn scholarships for JEE and NEET classroom programs. Through IAST, students can secure scholarships of up to 100% for these programs",
    },
    {
      question: "How long will the IAST scholarship be valid?",
      answer:
        "The scholarship will be valid for ten days from the date of announcement of results.",
    },
    {
      question: "Who can appear for IAST?",
      answer:
        "Students studying in classes 9 to 11 during the academic year 2024-25 are eligible to participate in IAST. They can utilise the scholarships to enrol in IIT Academy Courses for classes 10 to 12 (2025-26).",
    },
    {
      question: "What is the registration fee for IAST?",
      answer:
        "There is no registration fee for IAST. The scholarship test is free for a limited number of students.",
    },
    {
      question: "Will the test be monitored?",
      answer:
        "Yes, the test will be monitored to ensure a fair evaluation for all students. Any form of malpractice or cheating will be strictly discouraged and monitored through advanced tools, creating an equal opportunity for every participant to perform their best.",
    },
    {
      question: "When will the scholarship results be published?",
      answer:
        "Scholarship results will be published within five day after the test. Students can check their results on the IIT Academy website and they will also be notified via SMS and WhatsApp. Please note that the results will only display the scholarship discount awarded, and not the test marks or ranks.",
    },
    {
      question: "What are the benefits of taking IAST?",
      answer:
        "By performing well in IAST, students can receive up to 100% Scholarship, making it an excellent opportunity to get access to quality coaching for NEET, JEE, and foundation courses.",
    },
    {
      question: "What is your support helpline number?",
      answer:
        "In case you have any queries regarding the IAST, please reach out to our helpline number: +91-9205704041.",
    },
  ];

  return (
    <section id="faq" style={styles.sectionStyle}>
      <div style={styles.faqContainer}>
        <h2 style={styles.faqHeading}>Frequently Asked Questions</h2>
        {faqData.map((faqItem, index) => (
          <div style={styles.faq} key={index}>
            <div
              style={styles.question}
              className={`question ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <h3 style={styles.questionText}>{faqItem.question}</h3>
              <span
                style={{
                  ...styles.icon,
                  ...(activeIndex === index ? styles.iconActive : {}),
                }}
              >
                +
              </span>
            </div>
            <div
              style={{
                ...styles.answer,
                ...(activeIndex === index ? styles.answerVisible : {}),
              }}
            >
              <p
                className="w-[95%] mt-1 mb-1 ml-0 mr-0 text-black font-normal "
                styles={styles.pstyle}
              >
                {faqItem.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
