
import React, { useEffect } from "react";
import OpenSeadragon from "openseadragon";
import "./CenterView.css";

const CenterView = () => {
  useEffect(() => {
    OpenSeadragon({
      id: "openseadragon-viewer",
      tileSources: {
        type: "image",
        url: "/wsi.png", 
      },
      prefixUrl: "https://openseadragon.github.io/openseadragon/images/", 
      showNavigator: true, 
      defaultZoomLevel: 0, 
    });
  }, []);

  return (
    <div className="center-view">
      <div id="openseadragon-viewer" style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
};

export default CenterView;

