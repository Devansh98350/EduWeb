import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserInformation = ({ onNext, onDataChange }) => {
  const [isPolicyChecked, setIsPolicyChecked] = useState(false);
  const [formData, setFormData] = useState({
    // policyParagraph: '',
    emailAddress: "",
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (!formData.emailAddress.trim()) {
      toast.error("Email address is required.", {
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
    if (!isPolicyChecked) {
      toast.error("Please agree to the Candidate Privacy Policy.", {
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
    onDataChange(formData);
    onNext();
  };

  return (
    <div className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-4">User Information</h2>
      <div className="mb-4">
        {/* <textarea
          id="policyParagraph"
          value={formData.policyParagraph}
          onChange={handleChange}
          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
          rows={4}
          required
        /> */}
        <label
          htmlFor="policyParagraph"
          className="block text-sm font-large text-black mb-2"
        >
          IIT Academy Candidate Privacy Notice
        </label>
        <p className="text-sm text-gray-600">
          IIT Academy respects the privacy of every individual who visits our
          career site or responds to our communications. We comply with the
          applicable law at the locations of our operations. In the Candidate
          Privacy Notice we explain how we collect and process your personal
          data to enable you to apply for roles within the IIT Academy. We
          provide further details on the processing of personal data in the
          Privacy Notice and IIT Academy Employee Fair Processing Notice.
        </p>

        <p className="text-sm text-gray-600">
          <input
            type="checkbox"
            id="agreeToPolicy"
            checked={isPolicyChecked}
            onChange={(e) => setIsPolicyChecked(e.target.checked)}
            className="h-4 w-4 mr-2 text-blue-600 border-gray-300 rounded"
          />
          I herewith confirm I am submitting my personal data in support of my
          application for a role in the IIT Aademy and confirm I have read and
          understood the Candidate Privacy Policy.
        </p>
      </div>
      <div className="mb-4">
        <label
          htmlFor="emailAddress"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Email Address
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          type="email"
          id="emailAddress"
          value={formData.emailAddress}
          onChange={handleChange}
          placeholder="Enter Your Email Address"
          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <button
        onClick={handleNext}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
      >
        Continue
      </button>
    </div>
  );
};

export default UserInformation;
