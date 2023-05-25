import React from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import Select from 'react-select';

const AddJobs = () => {

    const id = localStorage.getItem("id");
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const [title , setTitle] = React.useState("");
    const [discription , setDescription] = React.useState("");
    const [jobType , setJobType] = React.useState("");
    const [jobCategory , setJobCategory] = React.useState("");
    const [closing_date , setClosing_date] = React.useState("");
    const [image , setImage] = React.useState("");

    const [jobPlayload , setJobPlayloads] = React.useState({
        createdBy : id,
        createdByName : name,
        createrEmail : email,
        title : "",
        discription : "",
        jobType : "",
        jobCategory : "",
        closing_date : "",
    });

    const onChangeInput = (e) => {
        setJobPlayloads({
            ...jobPlayload,
            [e.target.id]: e.target.value,
            jobType : jobType,
            jobCategory : jobCategory,
        });
    };



    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(jobPlayload)
            const res = await axios.post("http://localhost:8090/JobVacancy/add",jobPlayload);
            console.log(res);
            Swal.fire({
                title: "Success!",
                text: "Job added successfully",
                icon: 'success',
                timer: 2000,
                button: false,
            }).then(()=>{
                window.location.href = "/dashboard_ta";
            })
        } catch (err) {
            Swal.fire({
                title: "Error!",
                text: err.response.data.msg,
                icon: 'warning',
                timer: 2000,
                button: false,
            })
        }
    }


    // const JobCategoryies = [
    //     { value: "Full Time", label: "Full Time" },
    //     { value: "Part Time", label: "Part Time" },
    //     { value: "Contract", label: "Contract" },

    // ];

    // const JobType = [
    //     { value: "Human Resources Managment", label: "Human Resources Managment" },
    //     { value: "Information Technology", label: "Information Technology" },
    //     { value: "Accounting and Finance", label: "Accounting and Finance" },
    //     { value: "Health Sector", label: "Health Sector" },
    //     { value: "Education", label: "Education" },

    // ];

//    const handleJobCategory = (e) => {
//         setJobCategory(e.name);
//     };

    // const onJobCategoryiesOptionSelected = (e) => {
    //     this.setJobCategory({ jobCategory: e.label });
    // };

    // const onJobTypeOptionSelected = (e) => {
    //     this.setJobType({ jobType: e.label });
    //   }

    const handleImageChange = async e => {
      e.preventDefault()
      try {
          const file = e.target.files[0]
  
          if (!file) return alert("File not exist.")
  
          if (file.size > 1024 * 1024) // 1mb
              return alert("Size too large!")
  
          if (file.type !== 'image/jpeg' && file.type !== 'image/png') // 1mb
              return alert("File format is incorrect.")
  
          let formData = new FormData()
          formData.append('file', file)
          formData.append('upload_preset', 'Af_Assignment')
          formData.append('cloud_name', 'drao60sj6')
  
          // setLoading(true)
          const res = await axios.post( "https://api.cloudinary.com/v1_1/drao60sj6/image/upload",
          formData,
          {
            method: "post",
            body: formData,
            headers: {
              "content-type": "multipart/form-data",
            },
          })
          // setLoading(false)
          setJobPlayloads({
            ...jobPlayload,
            image: res.data.url,
          });
        } catch (err) {
          console.log(err.response.data.msg);
          
        }
 }




  return (
    <div>
       
    <div class="container-fluid" >
        <div class="row">
           

            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Jobs Vacancies </h1>
                {/* <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group me-2">
                    <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
                </div>
                <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                    <span data-feather="calendar" class="align-text-bottom"></span>
                    This week
                </button>
                </div> */}
            </div>
            <div className='container-sm'>
            <section className="vh-100 gradient-custom">
                <div className="container py-5">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12 col-lg-9 col-xl-7">
                    <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                        <div className="card-body p-4 p-md-5">
                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">New Jobs Vacancy </h3>
                        <form>
                        <div class="mb-3">
                                <label class="form-label">Job Creator Email</label>
                                <input type="text" class="form-control" id='title' name='email' value={email} onChange={(e) => onChangeInput(e)} required/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Job Title</label>
                                <input type="text" class="form-control" id='title' name='title' onChange={(e) => onChangeInput(e)} required/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Job Description</label>
                                <textarea type="text" class="form-control" style={{ height: "150px" }} id='discription' name='discription' onChange={(e) => onChangeInput(e)} required/>
                            </div>
                            <div class="mb-3">
                          <label class="form-label">Job Category</label>
                          <Select className="" name="jobType" 
                                      options={[
                                        { value: "FullTime", label: "Full Time" },
                                        { value: "PartTime", label: "Part Time" },
                                        { value: "Contract", label: "Contract" },
                                                
                                      ]}
                                      onChange={(e) => {
                                        setJobType(e.label);
                                      }}
                           />
                        </div>
                        <div class="mb-3">
                           <label class="form-label">Job Category</label>
                          <Select className="" name="jobCategory" 
                                      options={[
                                        { value: "Travel Agent", label: "Travel Agent" },
                                        { value: "Tour Operator", label: "Tour Operator" },
                                        { value: "Hotel Manager", label: "Hotel Manager" },
                                        { value: "Tour Guide", label: "Tour Guide" },
                                        { value: "Travel Photographer", label: "Travel Photographer" },
                                        
                                      ]}
                                      onChange={(e) => {
                                        setJobCategory(e.label);
                                      }}
                           />
                      </div> 
                      <div class="mb-3">
                                <label for="formFile" class="form-label">Poster</label>
                                <input class="form-control" type="file" id="formFile" name='image'  onChange={handleImageChange} />
                            </div> 
                      
                            <div class="mb-3">
                                <label class="form-label">Vacancy Closing Date</label>
                                <input className="form-control" type="Date" onChange={(e) => onChangeInput(e)} id="closing_date"
                                    name="closing_date"
                                    required />
                            </div>
                            <button type="submit" class="btn btn-primary" onClick={(e)=> onSubmit(e)}>Create</button>
                        </form>
                        </div>
                    </div>  
                    </div>
                </div>
                </div>
            </section>      
            
            </div>
            </main>
        </div>
    </div>

    </div>
  )
}

export default AddJobs