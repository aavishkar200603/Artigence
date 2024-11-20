import React from "react";
import LeftPanel from "./components/LeftPanel";
import HubView from "./components/HubView";
import CenterView from "./components/CenterView";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="left-panel-container">
        <LeftPanel />
      </div>
      <div className="main-container">
        <div className="hub-view-container">
          <HubView />
        </div>
        <div className="center-view-container">
          <CenterView />
        </div>
      </div>
    </div>
  );
};

export default App;
