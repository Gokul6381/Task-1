import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

const AddPat = () => {
  const [status, setStatus] = useState("");
  const [pat, setPat] = useState({
    name: "",
    phone: "",
    doctor: "",
    date: "",
    time: "",
  });
  const [doc, setDoc] = useState([]);
  const loadValue = (e) => {
    const { name, value } = e.target;
    setPat({ ...pat, [name]: value });
  };
  const loaddoc = (event) => {
    console.log("Selected Value:", event.target.value);
    setPat({ ...pat, doctor: event.target.value });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    console.log(pat);
    axios
      .post("http://127.0.0.1:8000/addpat", { data: pat })
      .then((response) => setStatus(response.data));
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/doctor")
      .then((response) => {
        setDoc(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="patient">
      <h1>Add Patients</h1>
      <h2>{status}</h2>
      <form method="post" onSubmit={formSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Patients Name"
          value={pat.name}
          onChange={loadValue}
          
        ></input>
        <br></br>
        <input
          type="tel"
          name="phone"
          placeholder="Enter Phone Number"
          pattern="[0-9]{10}"
          value={pat.phone}
          onChange={loadValue}
          
        ></input>
        <br></br>
        <select name="doctor" id="doctor" value={pat.doctor} onChange={loaddoc}     >
          <option value="" disabled>
            Select a doctor
          </option>
          {doc && doc.length > 0 ? (
            doc.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))
          ) : (
            <option value="">Loading...</option>
          )}
        </select>
        <br></br>
        <input
          type="date"
          name="date"
          placeholder="Enter Doctor Name"
          value={pat.date}
          onChange={loadValue}
          
        ></input>
        <br></br>
        <input
          type="time"
          name="time"
          placeholder="Enter Doctor Name"
          value={pat.time}
          onChange={loadValue}
          
        ></input>
        <br></br>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default AddPat;
