import './App.css';

import { useState, useEffect } from "react";
import axios from "axios";

import { Outlet } from "react-router-dom";


function App() {
  
  return (
    <div className="App">
     <div className="Header">
        <div className="left">
          <h1>Doctor Calender</h1>
        </div>
        <div className="right">
          <h3>
            <a href="/">Home</a>
          </h3>
          <h3>
            <a href="adddoc">Add Doctor</a>
          </h3>
          <h3>
            <a href="addpat">Add Patients</a>
          </h3>
          
        </div>
      </div>
      
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
