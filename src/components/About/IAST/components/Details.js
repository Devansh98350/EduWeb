import React from "react";

const Details = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl text-center font-bold text-[#e2010f] m-14">
        IIT Academy Scholarship Test (IAST)
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        <div className="flex flex-col items-center text-center border border-[#20227D] rounded-lg p-4 shadow-md">
          <div className="w-20 h-20 bg-blue-950 flex items-center justify-center rounded-full">
            <img
              src="https://cdn.motion.ac.in/ssp/img/most-latest/icon-1.png"
              className="w-12 h-12"
            />
          </div>
          <p className="text-xl font-bold text-blue-950 mt-4" s>
            Scholarship Test Details
          </p>

          <p className="text-xl">
            Duration :<b> 1 Hr</b>
          </p>
          <p className="text-lg">
            Mode :{" "}
            <b className="text-lg font-semibold text-blue-950">
              Offline(At our centre)
            </b>
          </p>
          <p className="m-3 text-lg">
            Take the test at specified date and time.
          </p>
        </div>
        <div className="flex flex-col items-center text-center border border-[#20227D] rounded-lg p-4 shadow-md">
          <div className="w-20 h-20 bg-blue-950 flex items-center justify-center rounded-full">
            <img
              src="https://cdn.motion.ac.in/ssp/img/most-latest/icon-2.png"
              className="w-12 h-12"
            />
          </div>
          <p className="text-xl font-bold text-blue-950 mt-4">
            Scholarship upto 100%
          </p>
          <p className="text-lg">
            Avail Scholarship Upto 100% on JEE & NEET Classroom Courses
          </p>
        </div>
        <div className="flex flex-col items-center text-center border border-[#20227D] rounded-lg p-4 shadow-md">
          <div className="w-20 h-20 bg-blue-950 flex items-center justify-center rounded-full">
            <img
              src="https://cdn.motion.ac.in/ssp/img/most-latest/icon-3.png"
              className="w-12 h-12"
            />
          </div>
          <p className="text-xl font-bold text-blue-950 mt-4">
            Who can appear for the test?
          </p>
          <p className="text-lg">Class 10th, 11th & 12th</p>
          <p className="text-lg">
            Registration Fee = <del>Rs 500 </del>FREE
          </p>
          <p className="m-[-2] text-xl text-red-500">
            (Only for LIMITED students)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
