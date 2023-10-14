import React, { useState, useEffect } from "react";
import "./App.css";
import ResponsiveDrawer from "./Component/SideNavBar";
import axios from "axios";


const Screen = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:8081/lead_management");
    setData(response.data);    
  };

  useEffect(() => {
    loadData();
  }, []); 

  return (
    <div className="App">
      <header className="App-header">
        <ResponsiveDrawer />
      </header>
    </div>
  );
};

export default Screen;
