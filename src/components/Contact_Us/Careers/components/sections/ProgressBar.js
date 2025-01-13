import React from "react";

const steps = [
  "User Information",
  "Personal Information",
  "Education and Work Experience",
  "Voluntary Information",
  "Review and Submit",
];

const ProgressBar = ({ step }) => {
  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-1 bg-gray-200"></div>
          <div
            className="absolute h-1 bg-blue-600 transition-all duration-500 ease-in-out"
            style={{ width: `${(step / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>
        <div className="flex items-center justify-between">
          {steps.map((label, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center"
            >
              <div
                className={`w-8 h-8 rounded-full border-2 ${
                  index <= step
                    ? "bg-blue-600 border-blue-600"
                    : "bg-white border-gray-300"
                }`}
              ></div>
              <div
                className={`absolute top-8 text-xs ${
                  index <= step ? "text-blue-600" : "text-gray-500"
                }`}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
