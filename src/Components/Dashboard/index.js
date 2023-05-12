import React from "react";
import "./dashboard.css";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/form");
  };
  const handleView = () => {
    navigate("/table");
  };

  return (
    <div className="container dashboard">
      <div className="row mt-3">
        <div className="col ">
          <div className="card text-center">
            <div className="card-body">
              <h1 className="card-title">Add Students Details</h1>
              <p className="card-text">Click here to add student details</p>
              <button onClick={handleAdd} className="btn btn-primary">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <div className="card text-center">
            <div className="card-body">
              <h1 className="card-title">View Students Details</h1>
              <p className="card-text">Click here to view student details</p>
              <button onClick={handleView} className="btn btn-primary">
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
