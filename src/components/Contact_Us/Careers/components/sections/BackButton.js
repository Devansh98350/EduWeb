import React from 'react';
import { useHistory, useNavigate } from 'react-router-dom';

const BackButton = ({ onClick }) => {
  const history = useNavigate();

  const handleBack = () => {
    if (onClick) {
      onClick()
    } else {
      history(-1);
    }
  };

  return (
    <button
      className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleBack}
    >
      Back
    </button>
  );
};

export default BackButton;
