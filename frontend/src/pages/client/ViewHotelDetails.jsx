import React from 'react'
import Footer from '../../components/client/Footer'
import Header from '../../components/client/Header'
import './styles.css'
import { useParams } from 'react-router-dom';

export default function ViewHotelDetails() {

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
            <img src='https://thehoughtonhotel.com/wp-content/uploads/2023/02/Houghton-Hotel-3-3-scaled.jpg' style={{ width: '76%' }} />
            <div className='pt-3'>
              <h3>Sheraton Colombo Hotel</h3>
            </div>
            <div>
              <div>Galle Road, Colombo</div>
              <div>+94 11 7 734400</div>
            </div>
          </div>
          <div className='view-hotel-main-text'>
            Designed for both business and leisure travelers alike, Sheraton Colombo Hotel welcomes you with a truly distinctive travel experience
            and is conveniently located in the heart of the business district. Be pampered in our spacious and stylish premium rooms and suites.
            Each one elegantly furnished with modern OR deluxe amenities, 49” flat screen TVs, complimentary high speed WiFi, sparkling marble bathrooms
            and our Sheraton Signature Sleep Experience, leaving you energized in the morning. The Sheraton Club Lounge located on the 19th floor offers a
            breathtaking view of the Colombo Skyline and is a wonderful place to work and relax.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
