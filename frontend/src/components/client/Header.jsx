import React from 'react'
import './styles.css'
import { NavLink } from 'react-router-dom'

export default function Header({ style }) {
  return (
    <div style={style}>
      <div className="container" style={style}>
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom" style={style}>
          <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
            <div className='header-logo'>Island Odyssey</div>
          </a>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><NavLink to='/homepage' style={{ textDecoration: 'none' }}><a href="#" className="nav-link px-2 link-secondary">Home</a></NavLink></li>
            <li><NavLink to='/places-page' style={{ textDecoration: 'none' }}><a href="#" className="nav-link px-2 link-dark">Travel Map</a></NavLink></li>
            <li><NavLink to='/transport-page' style={{ textDecoration: 'none' }}><a href="#" className="nav-link px-2 link-dark">Transport</a></NavLink></li>
            <li><NavLink to='/blog-page' style={{ textDecoration: 'none' }}><a href="#" className="nav-link px-2 link-dark">Blogs</a></NavLink></li>
            <li><NavLink to='/jobs-page' style={{ textDecoration: 'none' }}><a href="#" className="nav-link px-2 link-dark">Job Opportunities</a></NavLink></li>
            <li><NavLink to='/booking-page' style={{ textDecoration: 'none' }}><a href="#" className="nav-link px-2 link-dark">Bookings</a></NavLink></li>
            <li><a href="#" className="nav-link px-2 link-dark">Contact us</a></li>
          </ul>
          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2 header-login">LOGIN</button>
            <button type="button" className="btn btn-primary header-signup">SIGN UP</button>
          </div>
        </header>
      </div>
    </div>
  )
}
