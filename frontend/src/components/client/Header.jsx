import React from 'react'

export default function Header() {
  return (
    <div>
      <div className="container header-main">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
            <div className='header-logo'>Island Odyssey</div>
          </a>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">Travel Map</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">Transport</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">Blogs</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">Job Opportunities</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">About us</a></li>
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
