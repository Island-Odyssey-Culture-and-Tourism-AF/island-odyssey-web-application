import React from 'react'
import './styles.css'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function SideNavBar() {

  const [hoveredElements, setHoveredElements] = useState([]);

  const handleMouseEnter = (elementId) => {
    setHoveredElements((prevHoveredElements) => [...prevHoveredElements, elementId]);
  };

  const handleMouseLeave = (elementId) => {
    setHoveredElements((prevHoveredElements) =>
      prevHoveredElements.filter((id) => id !== elementId)
    );
  };

  const isElementHovered = (elementId) => hoveredElements.includes(elementId);

  const elementStyle = (elementId) => ({
    backgroundColor: isElementHovered(elementId) ? 'seashell' : '',
    transition: 'border 0.3s ease-in-out',
  });

  return (
    <div>
      <div className="d-flex flex-column flex-shrink-0 p-3" style={{ width: "280px", height: "720px", backgroundColor: "lightgreen" }}>
        <a href="/" className="align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <svg className="bi pe-none me-2" width="40" height="32"></svg>
          <span className="fs-4"><div className='header-logo'>Island Odyssey</div></span>
          Dashboard
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item"><NavLink to='/places-management' style={{textDecoration: 'none'}}>
            <a href="#" className="nav-link-side-nav-bar link-body-emphasis" aria-current="page" style={elementStyle('element1')}
              onMouseEnter={() => handleMouseEnter('element1')}
              onMouseLeave={() => handleMouseLeave('element1')}>
              <svg className="bi pe-none" width="16" height="16"></svg>
              Places to Visit Management
            </a></NavLink>
          </li>
          <li><NavLink to='/transport-management' style={{textDecoration: 'none'}}>
            <a href="#" className="nav-link-side-nav-bar link-body-emphasis" style={elementStyle('element2')}
              onMouseEnter={() => handleMouseEnter('element2')}
              onMouseLeave={() => handleMouseLeave('element2')}>
              <svg className="bi pe-none" width="16" height="16"></svg>
              Transport Management
            </a></NavLink>
          </li>
          <li><NavLink to='/booking-management' style={{textDecoration: 'none'}}>
            <a href="#" className="nav-link-side-nav-bar link-body-emphasis" style={elementStyle('element3')}
              onMouseEnter={() => handleMouseEnter('element3')}
              onMouseLeave={() => handleMouseLeave('element3')}>
              <svg className="bi pe-none" width="16" height="16"></svg>
              Booking Management
            </a></NavLink>
          </li>
          <li><NavLink to='/hotel-villa-management' style={{textDecoration: 'none'}}>
            <a href="#" className="nav-link-side-nav-bar link-body-emphasis" style={elementStyle('element4')}
              onMouseEnter={() => handleMouseEnter('element4')}
              onMouseLeave={() => handleMouseLeave('element4')}>
              <svg className="bi pe-none" width="16" height="16"></svg>
              Hotel / Villa Management
            </a></NavLink>
          </li>
          <li><NavLink to='/advertisement-management' style={{textDecoration: 'none'}}>
            <a href="#" className="nav-link-side-nav-bar link-body-emphasis" style={elementStyle('element5')}
              onMouseEnter={() => handleMouseEnter('element5')}
              onMouseLeave={() => handleMouseLeave('element5')}>
              <svg className="bi pe-none" width="16" height="16"></svg>
              Advertisement Management
            </a></NavLink>
          </li>
          <li><NavLink to='/job-management' style={{textDecoration: 'none'}}>
            <a href="#" className="nav-link-side-nav-bar link-body-emphasis" style={elementStyle('element6')}
              onMouseEnter={() => handleMouseEnter('element6')}
              onMouseLeave={() => handleMouseLeave('element6')}>
              <svg className="bi pe-none" width="16" height="16"></svg>
              Job Management
            </a></NavLink>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
        </div>
      </div>
    </div>
  )
}
