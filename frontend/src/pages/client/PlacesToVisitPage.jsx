import React from 'react'
import Footer from '../../components/client/Footer'
import Header from '../../components/client/Header'
import './styles.css'

export default function PlacesToVisitPage() {

  const headerBookingPageStyle = {
    height: "132px",
    backgroundColor: 'lightgreen'
  }

  return (
    <div><Header style={headerBookingPageStyle} />
      PlacesToVisitPage
      <Footer /></div>
  )
}
