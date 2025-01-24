import React from 'react'
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Calender = () => {
    const [pat, setPat] = useState([]);
        

  useEffect(() => {
      axios
        .get("http://127.0.0.1:8000/calender")
        .then((response) => {
          setPat(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    console.log(pat)
  return (
    <div className='calender'>
        <h1>Doctor Calender</h1>

        <table>
          <tbody>
          <tr>
                    <td><h2>Name</h2></td>
                    <td><h2>Phone</h2></td>
                    <td><h2>Doctor</h2></td>
                    <td><h2>Date</h2></td>
                    <td><h2>Time</h2></td>
                </tr>
          </tbody>
        </table>
      {pat && pat.length > 0 ? (
            pat.map((item) => (
              <table key={item.id}>
                <tbody>
                <tr>
                    <td><h2>{item.name}</h2></td>
                    <td><h2>{item.phone}</h2></td>
                    <td><h2>{item.doctor}</h2></td>
                    <td><h2>{item.date}</h2></td>
                    <td><h2>{item.time}</h2></td>
                </tr>
                </tbody>
              </table>
            ))
          ) : (
            <option value="">Loading...</option>
          )}      </div>
  )
}

export default Calender
