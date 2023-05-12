import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import "./form.css";

const Form = ({ onAdd }) => {

  const dashboard = useNavigate();
  
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!name || !secondName || !fatherName || !motherName || !address || !city || !district) {
      alert("Please fill in all fields");
      return;
    }
  
    onAdd({
      name,
      secondName,
      fatherName,
      motherName,
      address,
      city,
      district,
    });
    setName("");
    setSecondName("");
    setFatherName("");
    setMotherName("");
    setAddress("");
    setCity("");
    setDistrict("");
    dashboard("/dashboard");
  };
  

  


  return (
    <div className="wrapper">
      <h1 className="mt-3">Add Students</h1>
      <div className="container form-wrapper ">
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label htmlFor="Name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="SecondName" className="form-label">
              secondName
            </label>
            <input
              type="text"
              className="form-control"
              id="inputPassword4"
              value={secondName}
              onChange={(e) => setSecondName(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="FatherName" className="form-label">
              FatherName
            </label>
            <input
              type="text"
              className="form-control"
              value={fatherName}
              onChange={(e) => setFatherName(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="MotherName" className="form-label">
              MotherName
            </label>
            <input
              type="text"
              className="form-control"
              value={motherName}
              onChange={(e) => setMotherName(e.target.value)}
            />
          </div>
          <div className="col-12">
            <label htmlFor="Address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="City" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="District" className="form-label">
              District
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            />
          </div>

          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
