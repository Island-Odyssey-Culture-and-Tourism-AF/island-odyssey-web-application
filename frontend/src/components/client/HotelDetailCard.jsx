import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default function HotelDetailCard() {

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:5004/api/orders");
  //       setOrders(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <div>
      <div className='row row-cols-1 row-cols-md-4 g-2' style={{ display: "flex", justifyContent: "space-around" }}>
        {/* {orders.map(order => ( */}
        <div className="list-group mt-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', width: '-webkit-fill-available' }}>
          <a href="#" className="list-group-item list-group-item-action" style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <img src='https://thehoughtonhotel.com/wp-content/uploads/2023/02/Houghton-Hotel-3-3-scaled.jpg' style={{ width: '76%' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className='hotel-detail-card-text' style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                  <h5>Courtyard Colombo</h5>
                </div>
                <div>
                  Colombo City Centre, 137 Muttiah Road Colombo, Sri Lanka 00200
                </div>
                <NavLink to={{ pathname: '/view-hotel-detail' }} style={{ textDecoration: 'none' }}>
                  <div className='view-hotel-detail-link'>
                    View Hotel Details
                  </div></NavLink>
              </div>
              <div className='hotel-detail-card-price' style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                  Starting From Rs.20000/=
                </div>
              </div>
            </div>
            <div>
            <NavLink to={{ pathname: '/view-room-detail' }} style={{ textDecoration: 'none' }}>
              <button type="button" className="btn btn-outline-secondary view-btn">VIEW RATES</button></NavLink>
            </div>
          </a>
        </div>
        {/* ))}; */}
      </div>

    </div>
  )
}
