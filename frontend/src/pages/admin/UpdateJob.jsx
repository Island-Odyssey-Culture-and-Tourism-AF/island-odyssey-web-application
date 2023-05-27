import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateJob = () => {
  const { id } = useParams();
  const [jobVacancy, setJobVacancy] = useState({
    title: "",
    discription: "",
    jobType: "",
    jobCategory: "",
    closing_date: "",
    createdAt: "",
  });

  useEffect(() => {
    fetchJobVacancy();
  }, []);

  const fetchJobVacancy = () => {
    axios
      .get(`http://localhost:5000/api/JobVacancy/${id}`)
      .then((response) => {
        setJobVacancy(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch job vacancy", error);
      });
  };

  const handleInputChange = (e) => {
    setJobVacancy({ ...jobVacancy, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/JobVacancy/${id}`, jobVacancy)
      .then((response) => {
        console.log("Job vacancy updated successfully");
        window.location.href = "/alljob";
        // Redirect or show a success message
      })
      .catch((error) => {
        console.error("Failed to update job vacancy", error);
      });
  };

  return (
    <div>
      <h2>Update Job Vacancy</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={jobVacancy.title}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="discription"
            name="discription"
            value={jobVacancy.discription}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobType">Job Type:</label>
          <select
            id="jobType"
            name="jobType"
            value={jobVacancy.jobType}
            onChange={handleInputChange}
            className="form-control"
          >
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="jobCategory">Job Category:</label>
          <select
            id="jobCategory"
            name="jobCategory"
            value={jobVacancy.jobCategory}
            onChange={handleInputChange}
            className="form-control"
          >
            <option value="Information Technology">Information Technology</option>
            <option value="Finance">Finance</option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="closing_date">Closing Date:</label>
          <input
            type="date"
            id="closing_date"
            name="closing_date"
            value={jobVacancy.closing_date}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Update</button>
      </form>
    </div>
  );
};

export default UpdateJob;
