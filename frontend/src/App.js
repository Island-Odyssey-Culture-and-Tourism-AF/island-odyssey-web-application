import "./App.css";
import { React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from "./pages/client/Homepage";
import TransportationForm from "./components/client/TransportationForm";
import TransportationTable from "./components/client/TransportationTable";
import MapComponent from "./components/client/MapComponent";

import Homepage from './pages/client/Homepage';
import BookingPage from './pages/client/BookingPage';
import Dashboard from './pages/admin/Dashboard';
import PlacesToVisitManagement from './pages/admin/PlacesToVisitManagement';
import TransportManagement from './pages/admin/TransportManagement';
import BookingManagement from './pages/admin/BookingManagement';
import HotelVillaManagement from './pages/admin/HotelVillaManagement';
import AdvertisementManagement from './pages/admin/AdvertisementManagement';
import JobManagement from './pages/admin/JobManagement';
import PlacesToVisitPage from './pages/client/PlacesToVisitPage';
import TransportPage from './pages/client/TransportPage';
import JobsPage from './pages/client/JobsPage';
import BlogPage from './pages/client/BlogPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Homepage />} />

          <Route exact path="/homepage" element={<Homepage />} />
          <Route
            exact
            path="/transportationForm"
            element={<TransportationForm />}
          />
          <Route
            exact
            path="/transportationTable"
            element={<TransportationTable />}
          />

          <Route exact path="/map" element={<MapComponent />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/places-page" element={<PlacesToVisitPage/>} />
          <Route path="/transport-page" element={<TransportPage/>} />
          <Route path="/blog-page" element={<BlogPage/>} />
          <Route path="/jobs-page" element={<JobsPage/>} />
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
