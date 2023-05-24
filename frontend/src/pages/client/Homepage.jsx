import React from 'react'
import Header from '../../components/client/Header'
import Footer from '../../components/client/Footer'

export default function Homepage() {

  return (
    <div className='homepage-main'>
      <Header />
      <div className='homepage-center'>
        AN ISLAND ODYSSEY AWAITS YOU
        <div className="d-flex flex-column flex-sm-row w-100 gap-2">
          <label for="newsletter1" className="visually-hidden">Email address</label>
          <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
          <button className="btn btn-primary" type="button">Subscribe</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}
