import './App.css';
import { React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from './pages/client/Homepage';
import BookingPage from './pages/client/BookingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/booking-page" element={<BookingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
