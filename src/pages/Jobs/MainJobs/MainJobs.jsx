import './mainjobs.css'
import { NavLink, useLoaderData } from 'react-router-dom'

// import Job from '../../Component/Job/Job'
import { useState } from 'react'
import Job from './../../../Component/Job/Job';

function Jobs() {
  const userData = useLoaderData()
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Job 1',  },
    { id: 2, title: 'Job 2',  },
    
  ]);
 

  const handleDelete = async (id) => {
    try {
     await new Promise(resolve => setTimeout(resolve, 0));
     setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
    } catch (error) {
    }
  };

  const [favoriteJobs, setFavoriteJobs] = useState([]);
  const addToFavorites = (job) => {
    setFavoriteJobs((prevFavorites) => [...prevFavorites, job]);
  };
  return (
    <div className="jobsMainSection">
     <div className="jobsTitle">
     <h1 style={{textAlign:'center'}}>Available Jobs</h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et non voluptas adipisci odit, sapiente voluptates.</p>

     </div>
        <div className='jobMainContainer'>
        {
          userData.map((data)=><Job key={data.id}  data= {data} onDelete={handleDelete} userData={userData} setJobs={setJobs} addToFavorites={addToFavorites}/>)
        }
        </div>
        <div className="addjobWrapper">
        <NavLink className='addJobBtn' to={`/addjob/:id/`}>add job</NavLink>
        </div>
    </div>
  )
}

export default Jobs
