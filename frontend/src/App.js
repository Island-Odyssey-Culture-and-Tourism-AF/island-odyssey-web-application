import "./App.css";
import { React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
import ViewHotelDetails from './pages/client/ViewHotelDetails'
import ViewRoomDetails from "./pages/client/ViewRoomDetails";
import ReviewBookingDetails from "./pages/client/ReviewBookingDetails";
import SignIn from "./pages/common/SignIn";
import SignUp from "./pages/common/SignUp";
import { AuthProvider } from "./auth/AuthContext";


function App() {
  return (
    <Router>
      <div className="App">
      <AuthProvider>
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
          <Route path="/view-hotel-detail" element={<ViewHotelDetails/>} />
          <Route path="/view-room-detail" element={<ViewRoomDetails/>} />
          <Route path="/review-booking-detail" element={<ReviewBookingDetails/>} />
          <Route path="/sign-in" element={<SignIn/>} />
          <Route path="/sign-up" element={<SignUp/>} />
        </Routes>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
