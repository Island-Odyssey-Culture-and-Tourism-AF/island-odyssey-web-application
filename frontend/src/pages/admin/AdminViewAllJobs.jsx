import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminViewAllJobs = () => {
  const [jobVacancies, setJobVacancies] = useState([]);
  const [filteredJobVacancies, setFilteredJobVacancies] = useState([]);
  const [filterByType, setFilterByType] = useState("");
  const [filterByCategory, setFilterByCategory] = useState("");

  useEffect(() => {
    fetchJobVacancies();
  }, []);

  useEffect(() => {
    filterJobVacancies();
  }, [filterByType, filterByCategory]);

  const fetchJobVacancies = () => {
    axios
      .get("http://localhost:5000/api/JobVacancy/all")
      .then((response) => {
        setJobVacancies(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch job vacancies", error);
      });
  };

  const filterJobVacancies = () => {
    let filteredData = jobVacancies;

    if (filterByType) {
      filteredData = filteredData.filter(
        (jobVacancy) => jobVacancy.jobType === filterByType
      );
    }

    if (filterByCategory) {
      filteredData = filteredData.filter(
        (jobVacancy) => jobVacancy.jobCategory === filterByCategory
      );
    }

    setFilteredJobVacancies(filteredData);
  };

  const handleView = (id) => {
    window.location.href = `/jobvacancies/${id}`;
  };

  const handleUpdate = (id) => {
    console.log("Update job vacancy with ID:", id);
    window.location.href = `/update/jobvacancies/${id}`;
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/JobVacancy/${id}`)
      .then((response) => {
        console.log("Job vacancy deleted successfully");
        fetchJobVacancies();
      })
      .catch((error) => {
        console.error("Failed to delete job vacancy", error);
      });
  };

  return (
    <div>
      <div className="form-row mb-3">
        <div className="col">
          <label htmlFor="filterByType">Filter by Type:</label>
          <select
            id="filterByType"
            className="form-control"
            value={filterByType}
            onChange={(e) => setFilterByType(e.target.value)}
          >
            <option value="">All</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>
        <div className="col">
          <label htmlFor="filterByCategory">Filter by Category:</label>
          <select
            id="filterByCategory"
            className="form-control"
            value={filterByCategory}
            onChange={(e) => setFilterByCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Finance">Finance</option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Type</th>
            <th>Category</th>
            <th>Closing Date</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {(filteredJobVacancies.length > 0
            ? filteredJobVacancies
            : jobVacancies
          ).map((jobVacancy) => (
            <tr key={jobVacancy._id}>
              <td>{jobVacancy.title}</td>
              <td>{jobVacancy.discription}</td>
              <td>{jobVacancy.jobType}</td>
              <td>{jobVacancy.jobCategory}</td>
              <td>{jobVacancy.closing_date}</td>
              <td>{jobVacancy.createdAt}</td>
              <td>
                <button
                  style={{ margin: "2px", padding: "2px" }}
                  className="btn btn-primary mr-2"
                  onClick={() => handleView(jobVacancy._id)}
                >
                  View
                </button>
                <button
                  style={{ margin: "2px", padding: "2px" }}
                  className="btn btn-success mr-2"
                  onClick={() => handleUpdate(jobVacancy._id)}
                >
                  Update
                </button>
                <button
                  style={{ margin: "2px", padding: "2px" }}
                  className="btn btn-danger"
                  onClick={() => handleDelete(jobVacancy._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminViewAllJobs;
