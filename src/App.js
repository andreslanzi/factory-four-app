import React from "react";
import Dashboard from "./components/Dashboard";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="main">
      <Dashboard />
      <Footer />
    </div>
  );
};

export default App;
