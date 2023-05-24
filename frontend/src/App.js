import './App.css';
import { React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from './pages/client/Homepage';
import BookingPage from './pages/client/BookingPage';
import Dashboard from './pages/admin/Dashboard';
import PlacesToVisitManagement from './pages/admin/PlacesToVisitManagement';
import TransportManagement from './pages/admin/TransportManagement';
import BookingManagement from './pages/admin/BookingManagement';
import HotelVillaManagement from './pages/admin/HotelVillaManagement';
import AdvertisementManagement from './pages/admin/AdvertisementManagement';
import JobManagement from './pages/admin/JobManagement';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/booking-page" element={<BookingPage />} />
          <Route path="/admin-dashboard" element={<Dashboard/>} />
          <Route path="/places-management" element={<PlacesToVisitManagement/>} />
          <Route path="/transport-management" element={<TransportManagement/>} />
          <Route path="/booking-management" element={<BookingManagement/>} />
          <Route path="/hotel-villa-management" element={<HotelVillaManagement/>} />
          <Route path="/advertisement-management" element={<AdvertisementManagement/>} />
          <Route path="/job-management" element={<JobManagement/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
