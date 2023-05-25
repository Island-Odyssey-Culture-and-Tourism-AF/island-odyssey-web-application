import React, { useEffect } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import Select from 'react-select';


const AdminViewAllJobs = () => {

    const id = localStorage.getItem("id");
    const [job , setJob] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState("");
    // const params=useParams();
    // const placeID=params.id;

    useEffect(()=>{
        const getOwnJob = async () => {
          await axios.get(`http://localhost:8090/JobVacancy/ownjob/${localStorage.getItem("id")}`).then((res) => {
            setJob(res.data);
          }).catch((err) => {
              console.log(err.massage);
          }) 
      }
      getOwnJob();
      },[])

      const sortedJob = job.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB - dateA;
    });


    const filteredJob = sortedJob.filter((job) => {
        return (
            job.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        );
    });

    const repotGen = () => {
      const printWindow = window.open('', '_blank');
      printWindow.document.write(`
      <html>
      <head>
        <title>Report</title>
       
      </head>
      <body>
        <table>
        <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Create By</th>
          <th scope="col">Job Title</th>
          <th scope="col">Job Type</th>
          <th scope="col">Job Category</th>
          <th scope='col'>Create Date</th>
          <th scope="col">Closing Date</th>
        </tr>
      </thead>
          <tbody>
          ${filteredJob.map((job, index) => `
            
              <tbody>
                <tr key=${index}>
                  <td>${index + 1}</td>
                  <td>${job.createdByName}</td>
                  <td>${job.title}</td>
                  <td>${job.jobType}</td>
                  <td>${job.jobCategory}</td>
                  <td>${job.createdAt.toString().substring(0,10)}</td>
                  <td>
                    ${job.closing_date.toString().substring(0,10)}
                  </td>
                </tr>
              </tbody>
            
          `)}
        </table>
      </body>
    </html>
      `);
      printWindow.document.close();
      printWindow.print();
    };
    

  return (
    <div>
    <body >
         

   
   


<div class="container-fluid">
 <div class="row">
 

   <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
     <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
       <h1 class="h2">Added Job Vacancy</h1>
       <div class="btn-toolbar mb-2 mb-md-0">
         <div class="btn-group me-2">
           <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
           <button type="button" class="btn btn-sm btn-outline-secondary" onClick={repotGen} >Report</button>
         </div>
         <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
           <span data-feather="calendar" class="align-text-bottom"></span>
           This week
         </button>
       </div>
     </div>

     {/* <canvas className="my-4 w-100" id="myChart" style={{ width:"900", height:"380" }} ></canvas> */}

     <h2>Job Vacancy</h2>
     <div class="table-responsive">
       <table class="table table-striped table-sm">
         <thead>
           <tr>
             <th scope="col">No</th>
             <th scope="col">Job Title</th>
             <th scope="col">Job Type</th>
             <th scope="col">Job Category</th>
             <th scope='col'>Create Date</th>
             <th scope="col">Closing Date</th>
           </tr>
         </thead>
         {filteredJob.map((job, index) => {
          const closingDate = new Date(job.closing_date);
          const currentDate = new Date();

          let color = 'green';
          if (closingDate < currentDate) {
            color = 'red';
          } 

          const formattedClosingDate = closingDate.toISOString().split('T')[0];
          

          return (
            <tbody>
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{job.title}</td>
                <td>{job.jobType}</td>
                <td>{job.jobCategory}</td>
                <td>{job.createdAt.toString().substring(0,10)}</td>
                <td style={{ marginTop: "5px", color, fontWeight: 'bold' }}>
                  {formattedClosingDate}
                </td>
              </tr>
            </tbody>
          );
        })}


       </table>
     </div>
   </main>
 </div>
</div>


    </body>
   </div>
  )
}

export default AdminViewAllJobs