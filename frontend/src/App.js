import './App.css';
import { React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from './pages/client/Homepage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/homepage" element={<Homepage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
