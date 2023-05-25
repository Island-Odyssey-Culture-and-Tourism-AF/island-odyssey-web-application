import React, { useState, useEffect } from "react";
import axios from "axios";

const TransportationTable = () => {
  const [transportations, setTransportations] = useState([]);
  const [filteredTransportations, setFilteredTransportations] = useState([]);
  const [filterByComfort, setFilterByComfort] = useState("");
  const [filterByTransportation, setFilterByTransportation] = useState("");

  useEffect(() => {
    fetchTransportations();
  }, []);

  useEffect(() => {
    filterTransportations();
  }, [filterByComfort, filterByTransportation]);

  const fetchTransportations = () => {
    axios
      .get("http://localhost:5000/transportation/get")
      .then((response) => {
        setTransportations(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch transportations", error);
      });
  };

  const filterTransportations = () => {
    let filteredData = transportations;

    if (filterByComfort) {
      filteredData = filteredData.filter(
        (transportation) => transportation.levelOfComfort === filterByComfort
      );
    }

    if (filterByTransportation) {
      filteredData = filteredData.filter(
        (transportation) =>
          transportation.preferredModeOfTransportation ===
          filterByTransportation
      );
    }

    setFilteredTransportations(filteredData);
  };

  const handleView = (id) => {
    axios
      .get(`/transportation/${id}`)
      .then((response) => {
        const transportation = response.data;
        console.log("Transportation:", transportation);
      })
      .catch((error) => {
        console.error("Failed to fetch transportation", error);
      });
  };

  const handleUpdate = (id) => {
    console.log("Update transportation with ID:", id);
  };

  const handleDelete = (id) => {
    axios
      .delete(`/transportation/${id}`)
      .then((response) => {
        console.log("Transportation deleted successfully");
        fetchTransportations(); 
      })
      .catch((error) => {
        console.error("Failed to delete transportation", error);
      });
  };

  return (
    <div>
      <div className="form-row mb-3">
        <div className="col">
          <label htmlFor="filterByComfort">Filter by Comfort:</label>
          <select
            id="filterByComfort"
            className="form-control"
            value={filterByComfort}
            onChange={(e) => setFilterByComfort(e.target.value)}
          >
            <option value="">All</option>
            <option value="basic">Basic</option>
            <option value="standard">Standard</option>
            <option value="luxury">Luxury</option>
          </select>
        </div>
        <div className="col">
          <label htmlFor="filterByTransportation">
            Filter by Transportation:
          </label>
          <select
            id="filterByTransportation"
            className="form-control"
            value={filterByTransportation}
            onChange={(e) => setFilterByTransportation(e.target.value)}
          >
            <option value="">All</option>
            <option value="bus">Bus</option>
            <option value="train">Train</option>
            <option value="taxi">Taxi</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Destination</th>
            <th>Departure Date/Time</th>
            <th>Return Date/Time</th>
            <th>Preferred Mode of Transportation</th>
            <th>Min Cost</th>
            <th>Max Cost</th>
            <th>Min Trip Duration</th>
            <th>Max Trip Duration</th>
            <th>Level of Comfort</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {(filteredTransportations.length > 0
            ? filteredTransportations
            : transportations
          ).map((transportation) => (
            <tr key={transportation._id}>
              <td>{transportation.destination}</td>
              <td>{transportation.departureDateTime}</td>
              <td>{transportation.returnDateTime}</td>
              <td>{transportation.preferredModeOfTransportation}</td>
              <td>{transportation.minCost}</td>
              <td>{transportation.maxCost}</td>
              <td>{transportation.minTripDuration}</td>
              <td>{transportation.maxTripDuration}</td>
              <td>{transportation.levelOfComfort}</td>
              <td>
                <button
                  style={{ margin: "2px", padding: "2px" }}
                  className="btn btn-primary mr-2"
                  onClick={() => handleView(transportation._id)}
                >
                  View
                </button>
                <button
                  style={{ margin: "2px", padding: "2px" }}
                  className="btn btn-success mr-2"
                  onClick={() => handleUpdate(transportation._id)}
                >
                  Update
                </button>
                <button
                  style={{ margin: "2px", padding: "2px" }}
                  className="btn btn-danger"
                  onClick={() => handleDelete(transportation._id)}
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

export default TransportationTable;
