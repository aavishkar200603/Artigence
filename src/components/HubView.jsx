import React from "react";
import "./HubView.css";

const HubView = () => {
  return (
    <div className="hub-view">
      <h3>Hub View</h3>
      <img
        src="/wsi.png"
        alt="Whole Slide Overview"
        className="hub-image"
      />
      <div className="indicator">Current View</div>
    </div>
  );
};

export default HubView;
