






const UserViewAllJobs = () => {

    const [searchTerm, setSearchTerm] = React.useState("");
    const [jobvacancy, setJobvacancy] = Reactnpm 
    useEffect(()=>{
        const getAllVacancy = async () => {
            await axios.get(`http://localhost:8090/JobVacancy`).then((res) => {
                setJobvacancy(res.data);
            console.log( res.data)
            }).catch((err) => {
                console.log(err.massage);
            })
        }
        getAllVacancy();
    },[])

    const sortedJob = jobvacancy.slice().sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateB - dateA;
  });

    const filteredvacancy = sortedJob.filter((jobvacancy) => {
        return (
            jobvacancy.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            jobvacancy.jobType.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        );
    });


    const isNewJob = (jobvacancy) => {
      const createdAt = new Date(jobvacancy.createdAt);
      const currentDate = new Date();
      const differenceInDays = Math.ceil((currentDate - createdAt) / (1000 * 60 * 60 * 24)); 
  
      return differenceInDays <= 1; 
    };

    // const isExpire = (jobvacancy) => {
    //   const createdAt = new Date(jobvacancy.createdAt);
    //   const currentDate = new Date();
    //   const differenceInDaysEx = Math.ceil((currentDate - createdAt) / (1000 * 60 * 60 * 24));
    
    //   return differenceInDaysEx >= 1;
    // };

    // const { closing_date } = jobvacancy;
    // const date = new Date(jobvacancy.closing_date);
    
    // const formattedDate = date.toLocaleDateString('en-GB', {
    //   day: '2-digit',
    //   month: '2-digit',
    //   year: 'numeric'
    // }).split('/').join('-');

  


  return (
    <div>
        <HeaderGuide />
    <div className='album py-5 bg-body-tertiary'>
        <div class="container py-3" style={{ marginTop:'50px' }}>
  <main>
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {filteredvacancy.map((jobvacancy,index)=>{
          const closingDate = new Date(jobvacancy.closing_date);
          const currentDate = new Date();

          let color = 'green';
          if (closingDate < currentDate) {
            color = 'red';
          } 
        
          return (
              

            <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm" key={index}>
              <div class="card-header py-3">
                <h2 class="my-0 fw-normal"><a href={`/user_view_jobs/${jobvacancy._id}`} style={{ textDecoration:'none', color:'black' }}>{jobvacancy.title}</a></h2>
                {isNewJob(jobvacancy) && <span class="ribbon" style={{ width:'60px',fontSize:'16px',padding:'4px',position:'absolute', right:'-25px',top:'-12px',textAlign:'center',borderRadius:'25px',transform:'rotate(20deg)',backgroundColor:'#e32d52',color:'white'}}>New !</span>}
                {/* {isExpire(jobvacancy) && <span class="ribbon" style={{ width:'60px', fontSize:'16px', padding:'4px', position:'absolute', right:'-25px', top:'-12px', textAlign:'center', borderRadius:'25px', transform:'rotate(20deg)', backgroundColor:'#d91616', color:'white' }}>Expired</span>} */}

              </div>
              <div class="card-body">
              <h3 class="card-title pricing-card-title">Position : {jobvacancy.jobCategory}</h3>
                <p class="card-title pricing-card-title">{jobvacancy.jobType}</p>
                <p className="card-text" style={{ marginTop: "5px", color, fontWeight: 'bold' }} >Closing Date: {jobvacancy.closing_date.toString().substring(0,10)}</p>
                
                <Link aria-current="page" to={`/user_view_jobs/${jobvacancy._id}`}>
                <button type="button" class="w-100 btn btn-lg btn-outline-primary">View More</button>
                </Link>
              </div>
            </div>
          </div>   
          );

  })}
      
    </div>

  </main>


</div>
<Footer />
        </div>

    </div>
  )
}

export default UserViewAllJobs