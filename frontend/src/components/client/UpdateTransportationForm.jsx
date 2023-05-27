import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateTransportationForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [transportation, setTransportation] = useState({});
  const [formData, setFormData] = useState({
    destination: "",
    departureDateTime: "",
    returnDateTime: "",
    preferredModeOfTransportation: "",
    minCost: "",
    maxCost: "",
    minTripDuration: "",
    maxTripDuration: "",
    levelOfComfort: "",
  });

  useEffect(() => {
    fetchTransportation();
  }, []);

  const fetchTransportation = () => {
    axios
      .get(`http://localhost:5000/transportation/${id}`)
      .then((response) => {
        setTransportation(response.data);
        setFormData(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch transportation", error);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/transportation/${id}`, formData)
      .then((response) => {
        console.log("Transportation updated successfully");
        // Handle any success behavior, e.g., show a success message, redirect to another page, etc.
        navigate("/transportationTable");
      })
      .catch((error) => {
        console.error("Failed to update transportation", error);
        // Handle any error behavior, e.g., show an error message, revert changes, etc.
      });
  };

  return (
    <div className="card">
      <div className="card-header">Update Transportation</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          {/* Form fields */}
          <div className="form-group">
            <label htmlFor="destination">Destination:</label>
            <input
              type="text"
              className="form-control"
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="departureDateTime">Departure Date/Time:</label>
            <input
              type="datetime-local"
              className="form-control"
              id="departureDateTime"
              name="departureDateTime"
              value={formData.departureDateTime}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="returnDateTime">Return Date/Time:</label>
            <input
              type="datetime-local"
              className="form-control"
              id="returnDateTime"
              name="returnDateTime"
              value={formData.returnDateTime}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="preferredModeOfTransportation">
              Preferred Mode of Transportation:
            </label>
            <input
              type="text"
              className="form-control"
              id="preferredModeOfTransportation"
              name="preferredModeOfTransportation"
              value={formData.preferredModeOfTransportation}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="minCost">Minimum Cost:</label>
            <input
              type="number"
              className="form-control"
              id="minCost"
              name="minCost"
              value={formData.minCost}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="maxCost">Maximum Cost:</label>
            <input
              type="number"
              className="form-control"
              id="maxCost"
              name="maxCost"
              value={formData.maxCost}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="minTripDuration">Minimum Trip Duration:</label>
            <input
              type="text"
              className="form-control"
              id="minTripDuration"
              name="minTripDuration"
              value={formData.minTripDuration}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="maxTripDuration">Maximum Trip Duration:</label>
            <input
              type="text"
              className="form-control"
              id="maxTripDuration"
              name="maxTripDuration"
              value={formData.maxTripDuration}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="levelOfComfort">Level of Comfort:</label>
            <select
              className="form-control"
              id="levelOfComfort"
              name="levelOfComfort"
              value={formData.levelOfComfort}
              onChange={handleChange}
            >
              <option value="">Select Comfort Level</option>
              <option value="basic">Basic</option>
              <option value="standard">Standard</option>
              <option value="luxury">Luxury</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTransportationForm;
