import React from 'react'
import Header from '../../components/client/Header'
import Footer from '../../components/client/Footer'
import './styles.css'

export default function Homepage() {

  const headerMainStyle = {
    maxWidth: "inherit",
    paddingBottom: "112px",
  }

  return (
    <div className='homepage-main'>
      <Header style={headerMainStyle}/>
      <div className='homepage-center'>
        AN ISLAND ODYSSEY AWAITS YOU
        <div className="d-flex flex-column flex-sm-row gap-2" style={{width: '324px', marginLeft: "602px"}}>
          <label for="newsletter1" className="visually-hidden">Email address</label>
          <input id="newsletter1" type="text" className="form-control" placeholder="Search" style={{background: "bottom", color: "black", border: "solid blue 1px"}}/>
          <button className="btn btn-primary" type="button" style={{background: "bottom", color: "black"}}>Search</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}
