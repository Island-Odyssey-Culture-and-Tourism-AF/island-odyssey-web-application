import React from 'react'
import Footer from '../../components/client/Footer'
import Header from '../../components/client/Header'
import './styles.css'
import { NavLink } from 'react-router-dom';

export default function ReviewBookingDetails() {

  const headerBookingPageStyle = {
    height: "132px",
    backgroundColor: 'lightgreen'
  }
  return (
    <div>
      <Header style={headerBookingPageStyle} />
      <div className='view-hotel-page-content'>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          <div className='view-hotel-image'>
            <img src='https://thehoughtonhotel.com/wp-content/uploads/2023/02/Houghton-Hotel-3-6-scaled.jpg' style={{ width: '76%' }} />
            <div className='pt-3'>
              <h4>Summary of Charges :- Rs.30000/=</h4>
            </div>
          </div>
          <div className='review-booking-details-main-text'>
            <div>
              <div><h5>Superior, Guest room, City view</h5></div><br />
              <div>Check-in: Thursday, May 4, 2023</div><br />
              <div>Check-out: Friday, May 5, 2023</div><br />
              <div>Room(s): 1</div><br />
              <div>Guest(s) per room: 1</div><br />
              <NavLink to={{ pathname: '' }} style={{ textDecoration: 'none' }}>
                <div className='view-hotel-detail-link pb-3'>
                  EDIT
                </div></NavLink><br />
              <div><button type="button" class="btn btn-outline-secondary edit-btn">CONTINUE</button></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
