import "./App.css";
import { React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/client/Homepage";
import TransportationForm from "./components/client/TransportationForm";
import TransportationTable from "./components/client/TransportationTable";

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
