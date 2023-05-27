import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default function HotelDetailCard({onHotelsFetched}) {

  // const encoded = encodeURIComponent(userType);
  console.log(onHotelsFetched.name)

  return (
    <div>
      <div className='row row-cols-1 row-cols-md-4 g-2' style={{ display: "flex", justifyContent: "space-around" }}>
        {onHotelsFetched.map(hotel => (
        <div div key={hotel._id} className="list-group mt-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', width: '-webkit-fill-available' }}>
          <a href="#" className="list-group-item list-group-item-action" style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <img src='https://thehoughtonhotel.com/wp-content/uploads/2023/02/Houghton-Hotel-3-3-scaled.jpg' style={{ width: '76%' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className='hotel-detail-card-text' style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                  <h5>{hotel.name}</h5>
                </div>
                <div>
                  {hotel.location}
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
        ))};
      </div>

    </div>
  )
}
