import React, { useState } from "react";
import axios from "axios";

const EditTransportationForm = ({ transportation, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    destination: transportation.destination,
    departureDateTime: transportation.departureDateTime,
    returnDateTime: transportation.returnDateTime,
    preferredModeOfTransportation: transportation.preferredModeOfTransportation,
    minCost: transportation.minCost,
    maxCost: transportation.maxCost,
    minTripDuration: transportation.minTripDuration,
    maxTripDuration: transportation.maxTripDuration,
    levelOfComfort: transportation.levelOfComfort,
  });

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/transportation/${transportation._id}`, formData)
      .then((response) => {
        console.log("Transportation updated successfully");
        onUpdate(response.data);
        onClose();
      })
      .catch((error) => {
        console.error("Failed to update transportation", error);
      });
  };

  return (
    <div className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Transportation</h5>
            <button type="button" className="close" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="destination">Destination:</label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="departureDateTime">Departure Date/Time:</label>
                <input
                  type="text"
                  id="departureDateTime"
                  name="departureDateTime"
                  value={formData.departureDateTime}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="returnDateTime">Return Date/Time:</label>
                <input
                  type="text"
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
                  id="preferredModeOfTransportation"
                  name="preferredModeOfTransportation"
                  value={formData.preferredModeOfTransportation}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="minCost">Min Cost:</label>
                <input
                  type="text"
                  id="minCost"
                  name="minCost"
                  value={formData.minCost}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="maxCost">Max Cost:</label>
                <input
                  type="text"
                  id="maxCost"
                  name="maxCost"
                  value={formData.maxCost}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="minTripDuration">Min Trip Duration:</label>
                <input
                  type="text"
                  id="minTripDuration"
                  name="minTripDuration"
                  value={formData.minTripDuration}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="maxTripDuration">Max Trip Duration:</label>
                <input
                  type="text"
                  id="maxTripDuration"
                  name="maxTripDuration"
                  value={formData.maxTripDuration}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="levelOfComfort">Level of Comfort:</label>
                <input
                  type="text"
                  id="levelOfComfort"
                  name="levelOfComfort"
                  value={formData.levelOfComfort}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onClose}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTransportationForm;
