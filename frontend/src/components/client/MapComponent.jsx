import React, { useState } from "react";

const MapComponent = () => {
  const [startPoint, setStartPoint] = useState(null);
  const [endPoint, setEndPoint] = useState(null);

  const handleMapClick = (event) => {
    const { lat, lng } = event.latLng;
    const point = { latitude: lat(), longitude: lng() };
    if (!startPoint) {
      setStartPoint(point);
    } else if (!endPoint) {
      setEndPoint(point);
    }
  };

  const handleSavePoints = () => {
    if (startPoint && endPoint) {
      fetch("/api/points", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "startPoint",
          latitude: startPoint.latitude,
          longitude: startPoint.longitude,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Start point saved:", data);
        })
        .catch((error) => {
          console.error("Error saving start point:", error);
        });

      fetch("/api/points", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "endPoint",
          latitude: endPoint.latitude,
          longitude: endPoint.longitude,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("End point saved:", data);
        })
        .catch((error) => {
          console.error("Error saving end point:", error);
        });
    }
  };

  return (
    <div>
      <div
        id="map"
        style={{ height: "400px", width: "100%" }}
        onClick={handleMapClick}
      ></div>
      <button onClick={handleSavePoints}>Save Points</button>
    </div>
  );
};

export default MapComponent;
