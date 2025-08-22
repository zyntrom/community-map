import React from "react";
import "./InfoBox.css";

const InfoBox = ({ location }) => {
  return (
    <div className="info-box">
      <h3>Location Info</h3>
      <p><strong>Latitude:</strong> {location[0]}</p>
      <p><strong>Longitude:</strong> {location[1]}</p>
    </div>
  );
};

export default InfoBox;

