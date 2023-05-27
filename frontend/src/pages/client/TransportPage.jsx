import React from "react";
import Footer from "../../components/client/Footer";
import Header from "../../components/client/Header";
import "./styles.css";
import TransportationForm from "../../components/client/TransportationForm";

export default function TransportPage() {
  const headerBookingPageStyle = {
    height: "132px",
    backgroundColor: "lightgreen",
  };

  return (
    <div>
      <Header style={headerBookingPageStyle} />
      <div>
        <TransportationForm />
      </div>
      <Footer />
    </div>
  );
}
