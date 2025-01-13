import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WorkEducation = ({ onNext, onBack, onDataChange }) => {
  const [formData, setFormData] = useState({
    workExperience: [],
    educationLevel: "",
    passingInstituteType: "",
    yearOfPassing: "",
    cgpa: "",
    collegeName: "",
    degree: "",
  });
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
      setFormData({
        ...savedData,
        workExperience: savedData.workExperience || [], // Ensure workExperience is an array
      });
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

  const handleWorkExperienceChange = (index, field, value) => {
    const updatedWorkExperience = [...formData.workExperience];
    updatedWorkExperience[index][field] = value;
    setFormData((prevData) => ({
      ...prevData,
      workExperience: updatedWorkExperience,
    }));
  };

  const addWorkExperience = () => {
    setFormData((prevData) => ({
      ...prevData,
      workExperience: [
        ...prevData.workExperience,
        { companyName: "", startDate: "", endDate: "" },
      ],
    }));
  };

  const removeWorkExperience = (index) => {
    const updatedWorkExperience = [...formData.workExperience];
    updatedWorkExperience.splice(index, 1);
    setFormData((prevData) => ({
      ...prevData,
      workExperience: updatedWorkExperience,
    }));
  };

  const handleNext = () => {
    const requiredFields = {
      "Latest Qualification": formData.educationLevel,
      "Type of Institute": formData.passingInstituteType,
      "Year of Passing": formData.yearOfPassing,
      "CGPA Obtained": formData.cgpa,
      "College Name": formData.collegeName,
      "Degree Obtained": formData.degree,
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
    onDataChange(formData);
    onNext();
  };

  return (
    <div className="mx-auto mt-8 p-4 sm:p-8  rounded-lg ">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-6 text-center">
        Education and Work Experience
      </h2>
      <div className="mb-4 gap-4 flex flex-col lg:flex-row">
        <div className="flex-1">
          <label
            htmlFor="educationLevel"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Latest Qualification<span className="text-red-500 ml-1">*</span>
          </label>
          <select
            id="educationLevel"
            value={formData.educationLevel}
            onChange={handleChange}
            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
            required
          >
            <option value="" disabled>
              Select Latest Qualification
            </option>
            <option value="10th">10th</option>
            <option value="12th">12th</option>
            <option value="Graduate">Graduate</option>
            <option value="Post-Graduate">Post-Graduate</option>
            <option value="PhD">PhD</option>
          </select>
        </div>
        <div className="flex-1">
          <label
            htmlFor="passingInstituteType"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Type of Institute<span className="text-red-500 ml-1">*</span>
          </label>

          <select
            id="passingInstituteType"
            value={formData.passingInstituteType}
            onChange={handleChange}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="" disabled>
              Select Type of Institute
            </option>
            <option value="IIT">IIT</option>
            <option value="NIT">NIT</option>
            <option value="AIIMS">AIIMS</option>
            <option value="BDS">BDS</option>
            <option value="Others">Others</option>
          </select>
        </div>
      </div>

      <div className="mb-4 gap-4 flex flex-col lg:flex-row">
        <div className="flex-1">
          <label
            htmlFor="yearOfPassing"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Year of Passing<span className="text-red-500 ml-1">*</span>
          </label>

          <select
            id="yearOfPassing"
            value={formData.yearOfPassing}
            onChange={handleChange}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="" disabled>
              Passing Year
            </option>
            {Array.from(
              { length: 2024 - 1980 + 1 },
              (_, index) => 2024 - index
            ).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="cgpa"
          >
            CGPA/Percentile Obtained<span className="text-red-500 ml-1">*</span>
          </label>
          <input
            id="cgpa"
            type="text"
            value={formData.cgpa}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter CGPA/Percentile Obtained"
            required
          />
        </div>
      </div>

      <div className="mb-4 gap-4 flex flex-col lg:flex-row">
        <div className="flex-1 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="collegeName"
          >
            College Name<span className="text-red-500 ml-1">*</span>
          </label>
          <input
            id="collegeName"
            type="text"
            value={formData.collegeName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter College Name"
            required
          />
        </div>
        <div className="flex-1">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="degree"
          >
            Degree Obtained<span className="text-red-500 ml-1">*</span>
          </label>
          <input
            id="degree"
            type="text"
            value={formData.degree}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Degree Obtained"
            required
          />
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Work Experience</h3>
        {formData.workExperience.map((experience, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4 p-4 bg-white rounded-lg shadow-sm"
          >
            <div className="col-span-1">
              <label
                htmlFor={`companyName${index}`}
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                id={`companyName${index}`}
                value={experience.companyName}
                onChange={(e) =>
                  handleWorkExperienceChange(
                    index,
                    "companyName",
                    e.target.value
                  )
                }
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor={`designation${index}`}
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Designation / Role
              </label>
              <input
                type="text"
                id={`designation${index}`}
                value={experience.designation}
                onChange={(e) =>
                  handleWorkExperienceChange(
                    index,
                    "designation",
                    e.target.value
                  )
                }
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor={`startDate${index}`}
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Start Date
              </label>
              <input
                type="date"
                id={`startDate${index}`}
                value={experience.startDate}
                onChange={(e) =>
                  handleWorkExperienceChange(index, "startDate", e.target.value)
                }
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor={`endDate${index}`}
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                End Date
              </label>
              <input
                type="date"
                id={`endDate${index}`}
                value={experience.endDate}
                onChange={(e) =>
                  handleWorkExperienceChange(index, "endDate", e.target.value)
                }
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor={`ctc${index}`}
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Enter CTC (in LPA)
              </label>
              <input
                type="text"
                id={`ctc${index}`}
                value={experience.ctc}
                onChange={(e) =>
                  handleWorkExperienceChange(index, "ctc", e.target.value)
                }
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="col-span-1 flex items-end">
              <button
                type="button"
                onClick={() => removeWorkExperience(index)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={addWorkExperience}
          className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Add Work Experience
        </button>
      </div>

      <div className="flex justify-between">
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

export default WorkEducation;
