import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VoluntaryInformation = ({ onNext, onBack, onDataChange }) => {
  const [formData, setFormData] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);
  useEffect(() => {
    onDataChange(formData);
  }, [formData, onDataChange]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleNext = () => {
    const requiredFields = {
      "Are you at least 18 years of age?": formData.question1,
      "Are you legally eligible to work in the country to which you are applying?":
        formData.question2,
      "Sponsorship for Employment Visa Status": formData.question3,
      "Employment Agreement": formData.question4,
      " Do you have a disability or have you had one in the past?":
        formData.question5,
    };

    for (const [field, value] of Object.entries(requiredFields)) {
      if (!value || (typeof value === "string" && !value.trim())) {
        toast.error(`${field} is required.`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }
    }
    onDataChange({ formData });
    onNext();
  };

  return (
    <div className="mx-auto mt-8 p-4 sm:p-8 ">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-4 text-center">
        Voluntary Information
      </h2>

      <div className="mb-4">
        <p className="text-sm text-gray-600">
          IIT Academy is committed to continuing to make diversity, equity, and
          inclusion part of everything we do, especially in how we build our
          workforce. This voluntary self-identification form contains questions
          that help us improve our initiatives designed to build a more
          representative organization. Additionally, this form helps us comply
          with our legal obligations, where applicable.
        </p>
        <p className="text-sm text-gray-600">
          A few of these questions request responses that would indicate your
          sensitive personal data (e.g. your racial or ethnic origin, or your
          health). Where this is the case we rely on your consent to process
          this data. The responses you provide have no impact on hiring
          decisions and are kept for future applications. You can change the
          answers, and withdraw your consent, at any time.
        </p>
      </div>

      <div className="mb-4">
        <label
          htmlFor="question1"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Are you at least 18 years of age? (If not, your employment is subject
          to verification that you are of at least legal age and that you are
          able to supply any required work permit)
          <span className="text-red-500 ml-1">*</span>
        </label>
        <select
          id="question1"
          value={formData.question1}
          onChange={handleChange}
          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full h-10 sm:text-sm border-gray-300 rounded-md"
          required
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="question2"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Are you legally eligible to work in the country to which you are
          applying?<span className="text-red-500 ml-1">*</span>
        </label>
        <select
          id="question2"
          value={formData.question2}
          onChange={handleChange}
          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full h-10 sm:text-sm border-gray-300 rounded-md"
          required
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="question3"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Will you now or in the future require sponsorship for employment Visa
          status to be eligible to work in the country to which you are
          applying? (e.g., H-1B Visa status/Work Visa/Work Permit)
          <span className="text-red-500 ml-1">*</span>
        </label>
        <select
          id="question3"
          value={formData.question3}
          onChange={handleChange}
          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full h-10 sm:text-sm border-gray-300 rounded-md"
          required
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="question4"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Have you signed an employment agreement or any kind of restrictive
          covenant, covenant not to compete, non-solicitation, or a contract of
          any kind that might restrict your ability to perform duties for this
          Company?
          <span className="text-red-500 ml-1">*</span>
        </label>
        <select
          id="question4"
          value={formData.question4}
          onChange={handleChange}
          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full h-10 sm:text-sm border-gray-300 rounded-md"
          required
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="question5"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Do you have a disability or have you had one in the past?
        </label>
        <select
          id="question5"
          value={formData.question5}
          onChange={handleChange}
          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-md border-gray-300 rounded-md"
          required
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="Yes">
            Yes, I currently have or have had a disability.
          </option>
          <option value="No">
            No, I do not have or have not had a disability.
          </option>
          <option value="Don't">I do not want to answer</option>
        </select>
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={onBack}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Continue
        </button>
      </div>
    </div>
  );
};
export default VoluntaryInformation;
