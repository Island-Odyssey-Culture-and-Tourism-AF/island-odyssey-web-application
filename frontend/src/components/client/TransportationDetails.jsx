import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TransportationDetails = () => {
  const { id } = useParams();
  const [transportation, setTransportation] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/transportation/${id}`)
      .then((response) => {
        setTransportation(response.data);
      })
      .catch((error) => {
        console.error("Error retrieving transportation data:", error);
      });
  }, [id]);

  if (!transportation) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{transportation.destination}</h5>
        <p className="card-text">
          Departure Date and Time: {transportation.departureDateTime}
        </p>
        <p className="card-text">
          Return Date and Time: {transportation.returnDateTime}
        </p>
        <p className="card-text">
          Preferred Mode of Transportation:{" "}
          {transportation.preferredModeOfTransportation}
        </p>
        <p className="card-text">Minimum Cost: {transportation.minCost}</p>
        <p className="card-text">Maximum Cost: {transportation.maxCost}</p>
        <p className="card-text">
          Minimum Trip Duration: {transportation.minTripDuration}
        </p>
        <p className="card-text">
          Maximum Trip Duration: {transportation.maxTripDuration}
        </p>
        <p className="card-text">
          Level of Comfort: {transportation.levelOfComfort}
        </p>
      </div>
    </div>
  );
};

export default TransportationDetails;
