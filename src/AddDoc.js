import React from 'react'
import './App.css';
import { useState } from 'react';
import axios from 'axios';

const AddDoc = () => {
    const [status, setStatus] = useState('');
    const [doc, setDoc] = useState({
      name: "",
      phone: "",
    });
  
    const loadValue = (e) => {
        const { name, value } = e.target;
        setDoc({ ...doc, [name]: value });
      };

    const formSubmit = (event) => {
        event.preventDefault();
    
        axios.post('http://127.0.0.1:8000/adddoc',{data:doc})
        .then(response=>setStatus(response.data))
        
        
      };

    return (
    <div className='doctor'>    
    <h1>Add Doctor</h1>
    <h2>{status}</h2>
        <form method="post" onSubmit={formSubmit}>
      <input
          type="text"
          name="name"
          placeholder="Enter Doctor Name"
          value={doc.name}
          onChange={loadValue}
          required
        ></input><br></br>
        <input
          type="tel"
          name="phone"
          placeholder="Enter Phone Number"
          pattern="[0-9]{10}"
          value={doc.phone}
          onChange={loadValue}
          required
        ></input><br></br>
        <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default AddDoc
