import React from "react";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const SubjectCard = ({ title, division, subject, key, jobId, jobType }) => {
  const formattedTitle = title.replace(/\s+/g, "-").toLowerCase();
  return (
    <div className="bg-white shadow-lg rounded-lg p-3 border border-gray-200">
      <div className="flex justify-between items-center mb-4 ">
        <h2 className="text-lg font-semibold text-black text-center">
          {title}
        </h2>
        {/* <FaStar className="text-blue-700" /> */}
      </div>
      <div className="mb-4">
        <div className="flex items-center text-gray-700 mb-2">
          <FaMapMarkerAlt className="mr-2 text-green-500" />
          <span>{division}</span>
        </div>
        <div className="flex items-center text-gray-700">
          <FaMapMarkerAlt className="mr-2 text-green-500" />
          <span>{subject}</span>
        </div>
      </div>
      {/* <button className="bg-blue-600 text-white px-4 py-2 rounded-md">VIEW MORE</button> */}
      <div className="flex justify-center">
        <Link to={`/job-description/${formattedTitle}`}>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SubjectCard;
