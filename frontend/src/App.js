import './App.css';
import { React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from './pages/client/Homepage';

//admin
import AddJobs from './pages/admin/AddJobs';
import AllJobsEdit from './pages/admin/AllJobsEdit';
import AdminViewAllJobs from './pages/admin/AdminViewAllJobs';
import UpdateJob from './pages/admin/UpdateJob';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/homepage" element={<Homepage />} />

          {/* admin */}
          <Route path='/addjob' element={<AddJobs/>}/>
          <Route path='/alljob' element={<AllJobsEdit/>}/>
          <Route path='/adminviewjob' element={<AdminViewAllJobs/>}/>
          <Route path='/update/jobvacancies/:id' element={<UpdateJob/>}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
