import React, { useEffect } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';


const AllJobsEdit = () => {
    const id = localStorage.getItem("id");
    const [job , setJob] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState("");
    // const params=useParams();
    // const placeID=params.id;

    useEffect(()=>{
        const getOwnJob = async () => {
          await axios.get(`http://localhost:5000/api/JobVacancy/all`).then((res) => {
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

    const deleteItem = async (jobID) => {
        try{
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
              }).then((result) => {
                if (result.value === true) {
                  const res =  axios.delete(`http://localhost:8090/JobVacancy/delete/${jobID}`).then((res) => {
                    if (res) {
                      Swal.fire({
                        title: "Success!",
                        text: "Your file has been deleted",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                      }).then(() => {
                        window.location.href = "/AllJobsEdit";
                      });
                    } else {
                      Swal.fire({
                        title: "Error!",
                        text: "Something went wrong",
                        icon: "error",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                    }
                  });
                }
              });
      
        }catch(err){
            console.log(err.data.msg);
        }
      }
  

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
           <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
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
             <th scope="col">Action</th>
           </tr>
         </thead>
         {filteredJob.map((job, index) => {
          // const closingDate = new Date(job.closing_date);
          // const currentDate = new Date();

          // let color = 'green';
          // if (closingDate < currentDate) {
          //   color = 'red';
          // } 

          // const formattedClosingDate = closingDate.toISOString().split('T')[0];
          

          return (
            <tbody>
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{job.title}</td>
                <td>{job.jobType}</td>
                <td>{job.jobCategory}</td>
                <td>{job.createdAt}</td>
                <td >{job.closing_date}</td>
                <td>
                    <a href={`/update/jobvacancies/${job._id}`} >
                    <button type="button" class="btn btn-primary" style={{ margin:'5px' }}>Update</button>
                    </a>
                    <button type="button" class="btn btn-danger"onClick={()=>deleteItem(job._id)} >Delete</button>
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
export default AllJobsEdit;