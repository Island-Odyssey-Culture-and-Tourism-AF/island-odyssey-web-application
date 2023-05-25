import React from 'react'
import SideNavBar from '../../components/admin/SideNavBar'
import './styles.css'

export default function HotelVillaManagement() {
  return (
    <div className='main'>
      <div className="user-element"><strong>John Smith  </strong><img src="https://github.com/mdo.png" alt="" width="50" height="50" class="rounded-circle me-2" />
      </div>
      <SideNavBar />
      <div className='content-align'><h4>Hotel Villa Management</h4></div>
    </div>
  )
}
