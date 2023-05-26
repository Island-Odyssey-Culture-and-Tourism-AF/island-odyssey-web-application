import React, { useContext } from 'react';
import Header from '../../components/client/Header'
import Footer from '../../components/client/Footer'
import './styles.css'
import { AuthContext } from '../../auth/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Homepage() {

  const { role } = useContext(AuthContext);
  const navigate = useNavigate();

  if (role !== 'user') {
    // Redirect the user to the login page or show an access denied message
    navigate('/sign-in');
  }

  const headerMainStyle = {
    maxWidth: "inherit",
    paddingBottom: "112px",
  }

  return (
    <div className='homepage-main'>
      <Header style={headerMainStyle} />
      <div className='homepage-center'>
        AN ISLAND ODYSSEY AWAITS YOU
        <div className="d-flex flex-column flex-sm-row gap-2" style={{ width: '324px', marginLeft: "602px" }}>
          <label for="newsletter1" className="visually-hidden">Email address</label>
          <input id="newsletter1" type="text" className="form-control" placeholder="Search" style={{ background: "bottom", color: "black", border: "solid blue 1px" }} />
          <button className="btn btn-primary" type="button" style={{ background: "bottom", color: "black" }}>Search</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}
