import React from "react";
import "./LeftPanel.css";

const LeftPanel = () => {
  return (
    <div className="left-panel">
      <h2>Image Details</h2>
      <p><strong>Finding:</strong> Sample Whole Slide Image</p>
      <p>
        <strong>Description:</strong> This is a high-resolution slide image
        used for medical analysis.
      </p>
    </div>
  );
};

export default LeftPanel;
