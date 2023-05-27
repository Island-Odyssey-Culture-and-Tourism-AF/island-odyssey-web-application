import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function SelectLocation({ onHotelsFetched }) {
  const [location, setLocation] = useState('');
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetchHotelsByLocation();
  }, [location]);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const fetchHotelsByLocation = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/hotels/location/${location}`);
      const fetchedHotels = response.data;
      setHotels(fetchedHotels);
      onHotelsFetched(fetchedHotels); // Send fetched hotels to parent component
    } catch (error) {
      console.error('Error fetching hotels by location:', error);
    }
  };

  return (
    <div>
      Destination
      <input type="text" className="form-control select-location" placeholder="Location" value={location} onChange={handleLocationChange} />
      <div>
        {/* {hotels.map((hotel) => (
          <div key={hotel.id}>
            <h3>{hotel.name}</h3>
            <p>{hotel.location}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
}