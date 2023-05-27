import React from 'react'
import Footer from '../../components/client/Footer'
import Header from '../../components/client/Header'
import './styles.css'
import SelectLocation from '../../components/client/SelectLocation'
import StayDates from '../../components/client/StayDates'
import { useState } from 'react'
import SelectRoomGuests from '../../components/client/SelectRoomGuests'
import SortBy from '../../components/client/SortBy'
import FilterBy from '../../components/client/FilterBy'
import HotelDetailCard from '../../components/client/HotelDetailCard'

export default function BookingPage() {

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [selectedHotels, setSelectedHotels] = useState([]);

  const handleHotelsFetched = (hotels) => {
    setSelectedHotels(hotels);
    // Do any further processing with the fetched hotel details
  };


  const headerBookingPageStyle = {
    height: "132px",
    backgroundColor: 'lightgreen'
  }
  return (
    <div>
      <Header style={headerBookingPageStyle} />
      <div className='booking-page-content'>
        <div className='select-options-header pt-3 pb-3 px-3' style={{ display: 'flex', gap: '10px' }}>
          <div className='select-1' style={{ flex: '1' }}>
            <SelectLocation onHotelsFetched={handleHotelsFetched}/>
          </div>
          <div className='select-2' style={{ flex: '1' }}>
            Check-In
            <StayDates selected={selectedDate} onChange={handleDateChange} dateFormat="MM/dd/yyyy" placeholderText="" />
          </div>
          <div className='select-3' style={{ flex: '1' }}>
            Check-out
            <StayDates selected={selectedDate} onChange={handleDateChange} dateFormat="MM/dd/yyyy" placeholderText="" />
          </div>
          <div className='select-4' style={{ flex: '1' }}>
            <SelectRoomGuests />
          </div>
          <div className='select-5 pt-4' style={{ flex: '1' }}>
            <button type="button" class="btn btn-outline-secondary edit-btn">Edit</button>
          </div>
        </div>
        <div className='select-options-header py-4 px-3' style={{ display: 'flex', gap: '10px' }}>
          <div className='' style={{ paddingRight: '12rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg> Map View
          </div>
          <div className='' style={{ flex: '0%' }}>
            <SortBy />
          </div>
          <div style={{ flex: '1' }}>
            <FilterBy />
          </div>
        </div>
        <div className='select-options-header py-4 px-3' style={{ display: 'flex' }}>
          Showing 1 - 3 of 3 Hotels
        </div>
        <main className="col-md-9 col-lg-10 py-1 px-3" style={{ width: '100%' }}>
          <HotelDetailCard onHotelsFetched={selectedHotels}/>
        </main>
      </div>
      <Footer />
    </div>
  )
}
