import React from 'react'
import SideNavBar from '../../components/admin/SideNavBar'
import './styles.css'
import AddHotelModal from '../../components/admin/modals/AddHotelModal'
import HotelCard from '../../components/admin/HotelCard'

export default function HotelVillaManagement() {
  return (
    <div className='main'>
      <div className="user-element"><strong>John Smith  </strong><img src="https://github.com/mdo.png" alt="" width="50" height="50" className="rounded-circle me-2" />
      </div>
      <SideNavBar />
      <div className='content-align'>
        <h4>Hotel / Villa Management</h4>
        <div className="btn-toolbar mb-2 mb-md-0 add-hotel-modal">
          <AddHotelModal />
        </div>
        <HotelCard />
      </div>
    </div>
  )
}
