import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const SingleQuestion = ({ title, info }) => {
  const [shoInfo, setShowInfo] = useState(false);
  return (
    <div className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => setShowInfo(!shoInfo)}>
          {shoInfo ? <FaMinus /> : <FaPlus />}
        </button>
      </header>
      <p>{shoInfo && info}</p>
    </div>
  );
};

export default SingleQuestion;
