import React from "react";
import Sidebar from "./Sidebar";
import MarketBar from "./MarketBar";
import Dashboard from "./Dashboard";

const Home = () => {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="app-main">
        <MarketBar />
        <Dashboard />
      </div>
    </div>
  );
};

export default Home;
