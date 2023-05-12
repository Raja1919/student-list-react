import React from "react";
import "./home.css";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  return (
    <div className="container container-wrapper">
      <form onSubmit={handleClick} className="form">
        <h1>LOGIN</h1>
        <hr className="mb-4"></hr>
        <div className="row mb-3">
          <label for="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col">
            <input type="email" className="form-control" required />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col">
            <input type="password" className="form-control" required />
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary ">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
