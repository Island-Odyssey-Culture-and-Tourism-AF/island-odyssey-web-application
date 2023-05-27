import React from 'react'
import Footer from '../../components/client/Footer'
import Header from '../../components/client/Header'
import './styles.css'
import StayDates from '../../components/client/StayDates'
import { useState } from 'react'
import SelectRoomGuests from '../../components/client/SelectRoomGuests'
import HotelDetailCard from '../../components/client/HotelDetailCard'
import RoomDetailsCard from '../../components/client/RoomDetailsCard'

export default function ViewRoomDetails() {

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
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
        <div className='select-options-header py-4 px-3' style={{ display: 'flex' }}>
          To book an accessible room, select a room type first.
        </div>
        <main className="col-md-9 col-lg-10 py-1 px-3" style={{ width: '100%' }}>
          <RoomDetailsCard />
        </main>
      </div>
      <Footer />
    </div>
  )
}
