import React from "react";

const Thirdsec = () => {
  const data = [
    {
      img: "https://cdn.motion.ac.in/ssp/img/most-latest/target-amico1.png",
      text: "The objective of IAST is to encourage students in developing their study skills and embracing individual strengths. We conduct this test for both online and offline batches in order to provide equal possibilities. As a result, every student benefits from this test and is eligible to receive the award.",
    },
    {
      img: "https://cdn.motion.ac.in/ssp/img/most-latest/target-amico2.png",
      text: "IAST is a program to provide financial aid to the students aspiring for JEE, NEET or Foundation Exam through IIT Academy Education. It is a great opportunity for students who have been exempted from getting privileges based on any other criteria.",
    },
    {
      img: "https://cdn.motion.ac.in/ssp/img/most-latest/target-amico3.png",
      text: "IAST enables students to assess their performance and gain first-hand experience. To do this, we create a paper format that mirrors the final test as well as a national ranking. Through this procedure, students gain more self-assurance, analytical abilities, and improve performance in future.",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold text-[#e2010f] my-8 text-center">
        Why should you choose IAST?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-6xl">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative bg-white border border-gray-200 shadow-lg rounded-2xl p-6 flex flex-col items-center text-center"
          >
            {/* Orange Star Icon */}
            <div className="absolute top-[-10px] left-[-10px] bg-orange-500 w-10 h-10 flex items-center justify-center rounded-md shadow-lg">
              <span className="text-white text-xl font-bold">★</span>
            </div>

            {/* Image */}
            <img
              src={item.img}
              alt="icon"
              className="w-72 h-72 object-contain mb-4"
            />

            {/* Description */}
            <p className="text-gray-700 text-base">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Thirdsec;
