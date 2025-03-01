import React from "react";

const ScholarshipSection = () => {
  return (
    <div className="w-full  bg-white text-center">
      {/* Highlights Section */}
      <div className="mt-16">
        <h2 className="text-red-600 text-3xl font-semibold mb-6">
          IAST Highlights
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
          <div className="flex items-center">
            <img
              src="https://cdn.motion.ac.in/ssp/img/most-latest/image-1.png"
              alt="Scholarship"
              className="w-20 mr-4"
            />
            <div>
              <h3 className="font-semibold text-lg">Upto 100% Scholarships</h3>
              <p>
                Students get awarded based on their performance in the
                scholarship test.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="https://cdn.motion.ac.in/ssp/img/most-latest/image-2.png"
              alt="Analysis"
              className="w-20 mr-4"
            />
            <div>
              <h3 className="font-semibold text-lg">Overall Analysis</h3>
              <p>
                The analysis is designed to analyse overall performance growth
                with data analysis charts.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="https://cdn.motion.ac.in/ssp/img/most-latest/image-3.png"
              alt="Uplift Talent"
              className="w-20 mr-4"
            />
            <div>
              <h3 className="font-semibold text-lg">Uplift Talent</h3>
              <p>
                Scholarship test that offers direct entry to various courses for
                deserving students.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="https://cdn.motion.ac.in/ssp/img/most-latest/image-4.png"
              alt="Self Analysis"
              className="w-20 mr-4"
            />
            <div>
              <h3 className="font-semibold text-lg">Self-analysis</h3>
              <p>
                Students can analyze their strengths and areas of improvement
                accordingly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 bg-gradient-to-r from-[#f7f024] to-[#f36e1d] py-12 text-white text-center">
        <h3 className="text-xl">
          India’s largest scholarship test available 24/7
        </h3>
        <h2 className="text-5xl font-semibold mt-2">
          Get Upto 100% Scholarship
        </h2>
        <button
          className="mt-6 px-36 py-2 bg-orange-600 text-white font-semibold shadow-md hover:bg-blue-500"
          onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default ScholarshipSection;
