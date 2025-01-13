import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";

const ReviewSubmit = ({ formData, onBack, onSubmit }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isAgreed, setIsAgreed] = useState(false);
  // console.log(id);
  const handleSubmit = async () => {
    if (!isAgreed) {
      toast.error(
        "You must agree to the terms and conditions before submitting.",
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      return;
    }
    try {
      const workExperienceData =
        formData.workExperience?.map((exp) => ({
          companyName: exp.companyName || "",
          designation: exp.designation || "",
          startDate: exp.startDate || "",
          endDate: exp.endDate || "",
          ctc: exp.ctc || "",
        })) || [];
      const formDataToSend = {
        "Job Id": id,
        Email: formData.emailAddress,
        Name: formData.Name,
        "Date of Birth": formData.dob,
        "Phone Number": formData.phone,
        Gender: formData.gender,
        Category: formData.category,
        "Permanent Address": formData.permanentAddress,
        "Current Address": formData.currentAddress,
        Country: formData.country,
        State: formData.state,
        District: formData.district,
        "Pin Code": formData.pincode,
        "Latest Qualification": formData.educationLevel,
        "Type of Institute": formData.passingInstituteType,
        "Year of Passing": formData.yearOfPassing,
        "CGPA Obtained": formData.cgpa,
        "College Name": formData.collegeName,
        "Degree Obtained": formData.degree,
        "Atleast 18 year": formData.question1,
        "Legally Eligible": formData.question2,
        Sponsorship: formData.question3,
        "Employment Agreement": formData.question4,
        Disability: formData.question5,
        workExperience: workExperienceData,
      };
      console.log(formDataToSend);
      console.log("hi");
      // localStorage.removeItem("formData");
      // localStorage.removeItem("currentStep");
      // console.log("hi");

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyJPn1TbsnzdaPBgsHrg-5P1LRb_6GXM4iNRc85Huth_VyK_8rPhJynZGxs06AZcOyg/exec",
        {
          method: "POST",
          // headers: {
          //   "Content-Type": "application/json",
          // },
          // body: JSON.stringify(formDataToSend),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formDataToSend),
          mode: "cors",
        }
      );

      localStorage.removeItem("formData");
      localStorage.removeItem("currentStep");

      if (response.ok) {
        alert("Application submitted successfully");
        navigate("/");
      } else {
        throw new Error("Failed to submit application");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
    }
  };

  return (
    <div className="mx-auto mt-8 p-4 sm:p-8  rounded-lg">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-4 text-center">Review and Submit</h2>

      <div className="bg-white shadow-md rounded p-6 mb-4">
        <h3 className="text-xl font-semibold mb-2">User Information:</h3>
        <p>
          <strong>Email Id:</strong> {formData.emailAddress}
        </p>
      </div>

      <div className="bg-white shadow-md rounded p-6 mb-4">
        <h3 className="text-xl font-semibold mb-2">Personal Information:</h3>
        <p>
          <strong>Name:</strong> {formData.Name}
        </p>
        <div className="grid gap-0 md:gap-4 md:grid-cols-2">
          <p>
            <strong>Date of Birth:</strong> {formData.dob}
          </p>
          <p>
            <strong>Phone No.:</strong> {formData.phone}
          </p>
        </div>
        <div className="grid gap-0 md:gap-4 md:grid-cols-2">
          <p>
            <strong>Gender:</strong> {formData.gender}
          </p>
          <p>
            <strong>Category:</strong> {formData.category}
          </p>
        </div>
        <div className="grid gap-0 md:gap-4 md:grid-cols-2">
          <p>
            <strong>Permanent Address:</strong> {formData.permanentAddress}
          </p>
          <p>
            <strong>Current Address:</strong> {formData.currentAddress}
          </p>
        </div>
        <div className="grid gap-0 md:gap-4 md:grid-cols-2">
          <p>
            <strong>Country:</strong> {formData.country}
          </p>
          <p>
            <strong>State:</strong> {formData.state}
          </p>
        </div>
        <div className="grid gap-0 md:gap-4 md:grid-cols-2">
          <p>
            <strong>District:</strong> {formData.district}
          </p>
          <p>
            <strong>Pin Code:</strong> {formData.pincode}
          </p>
        </div>
        <p>
          <strong>Resume:</strong>{" "}
          <a
            href={formData.resumeUrl}
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </p>
        <p>
          <strong>Photo:</strong>{" "}
          <a
            href={formData.photoUrl}
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Photo
          </a>
        </p>
      </div>

      <div className="bg-white shadow-md rounded p-6 mb-4">
        <h3 className="text-xl font-semibold mb-2">Education Details:</h3>
        <div className="grid gap-0 md:gap-4 md:grid-cols-2">
          <p>
            <strong>Latest Qualification:</strong> {formData.educationLevel}
          </p>
          <p>
            <strong>Type of Institute:</strong> {formData.passingInstituteType}
          </p>
        </div>
        <div className="grid gap-0 md:gap-4 md:grid-cols-2">
          <p>
            <strong> Year of Passing:</strong> {formData.yearOfPassing}
          </p>
          <p>
            <strong>CGPA/Percentile Obtained:</strong> {formData.cgpa}
          </p>
        </div>
        <div className="grid gap-0 md:gap-4 md:grid-cols-2">
          <p>
            <strong>College Name:</strong> {formData.collegeName}
          </p>
          <p>
            <strong>Degree Obtained:</strong> {formData.degree}
          </p>
        </div>
        {formData.workExperience && formData.workExperience.length > 0 && (
          <h3 className="text-xl font-semibold mb-2">
            Work Experience Details:
          </h3>
        )}

        {formData.workExperience.map((experience, index) => (
          <div key={index} className="mb-2">
            <div className="grid gap-0 md:gap-4 md:grid-cols-2">
              <p>
                <strong>Company Name:</strong> {experience.companyName}
              </p>
              <p>
                <strong>Designation / Role:</strong> {experience.designation}
              </p>
            </div>
            <div className="grid gap-0 md:gap-4 md:grid-cols-2">
              <p>
                <strong>Start Date:</strong> {experience.startDate}
              </p>
              <p>
                <strong>End Date:</strong> {experience.endDate}
              </p>
            </div>
            <div className="grid gap-0 md:gap-4 md:grid-cols-2">
              <p>
                <strong>Enter CTC (in LPA):</strong> {experience.ctc}
              </p>
              <p>
                <strong>Currently Working:</strong>{" "}
                {experience.currentlyWorking ? "Yes" : "No"}
              </p>
            </div>
            {index < formData.workExperience.length - 1 && (
              <hr className="my-4 border-gray-300" />
            )}
          </div>
        ))}
      </div>

      <div className="bg-white shadow-md rounded p-6 mb-4">
        <h3 className="text-xl font-semibold mb-2">Voluntary Questions:</h3>
        <p>
          <strong>
            Are you at least 18 years of age? (If not, your employment is
            subject to verification that you are of at least legal age and that
            you are able to supply any required work permit)
          </strong>
          <span className="block">{formData.question1}</span>
        </p>
        <p>
          <strong>
            Are you legally eligible to work in the country to which you are
            applying?
          </strong>
          <span className="block">{formData.question2}</span>
        </p>
        <p>
          <strong>
            Will you now or in the future require sponsorship for employment
            Visa status to be eligible to work in the country to which you are
            applying? (e.g., H-1B Visa status/Work Visa/Work Permit)
          </strong>
          <span className="block">{formData.question3}</span>
        </p>
        <p>
          <strong>
            Have you signed an employment agreement or any kind of restrictive
            covenant, covenant not to compete, non-solicitation, or a contract
            of any kind that might restrict your ability to perform duties for
            this Company?
          </strong>
          <span className="block">{formData.question4}</span>
        </p>
        <p>
          <strong>
            Do you have a disability or have you had one in the past?
          </strong>
          <span className="block">{formData.question5}</span>
        </p>
      </div>

      <div className="bg-white shadow-md rounded p-3 mb-4">
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="agreeTerms"
            className="mt-0 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            required
            checked={isAgreed}
            onChange={(e) => setIsAgreed(e.target.checked)}
          />
          <label htmlFor="agreeTerms" className="text-sm text-gray-700">
            By submitting this form, I agree to receive all the whatsapp
            communication on my registered mobile number and agreeing to terms
            of Use and Privacy Policy.
          </label>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={onBack}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ReviewSubmit;
