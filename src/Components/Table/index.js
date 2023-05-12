import React from "react";
import { useNavigate } from "react-router";
import "./table.css";

const Table = ({ data, handleDelete }) => {
  const back = useNavigate();

  const handleback = () => {
    back("/dashboard");
  };

  return (
    <>
      <h1 className="mt-3">Student List</h1>
      <div className="container table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>secondName</th>
              <th>FatherName</th>
              <th>MotherName</th>
              <th>Address</th>
              <th>City</th>
              <th>District</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, id) => (
              <tr key={id}>
                <td>{item.name}</td>
                <td>{item.secondName}</td>
                <td>{item.fatherName}</td>
                <td>{item.motherName}</td>
                <td>{item.address}</td>
                <td>{item.city}</td>
                <td>{item.district}</td>
                <td className="">
                  <button className="delete" onClick={() => handleDelete(id)}>
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-center">
          <button onClick={handleback} className="back">
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default Table;
