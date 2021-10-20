import React from "react";
import Shape from "./Shape";

const TeeterTotterObject = () => {
  return (
    <div className="teeter-totter-object">
        
      <div className="teeter-totter-object-board">
        <Shape></Shape>

        <Shape></Shape>
      </div>

      <div className="teeter-totter-object-foundation"></div>
    </div>
  );
};

export default TeeterTotterObject;
