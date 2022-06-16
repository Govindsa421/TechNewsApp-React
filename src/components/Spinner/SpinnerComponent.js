import React from "react";
import "../Spinner/Spinner.css";

const SpinnerComponent = () => {
  return (
    <>
     
      <svg className="spinner" viewBox="0 0 50 50">
        <circle
          className="path"
          cx={25}
          cy={25}
          r={20}
          fill="none"
          strokeDasharray={30}
          // strokes-width={100}
        ></circle>
      </svg>
    </>
  );
};

export default SpinnerComponent;
