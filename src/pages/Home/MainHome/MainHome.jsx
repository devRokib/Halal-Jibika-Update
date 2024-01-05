import { NavLink, useLoaderData, useNavigate } from 'react-router-dom'
import './mainhome.css'
// import LatestJob from './LatestJob/LatestJob'
import { onAuthStateChanged } from 'firebase/auth';
// import auth from '../../fireConfige/FirebaseConfig';
import Swal from 'sweetalert2';
import LatestJob from './../LatestJob/LatestJob';
import auth from '../../../fireConfig/FirebaseConfig';

function Home() {
  const data = useLoaderData()
  const navigate = useNavigate()
  const handleExploreClick = () => {
   
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/jobs');
        const uid = user.uid;
        // ...
      } else {
        navigate('/signup');
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You need to sign in or sign up to explore jobs!',
          confirmButtonText: 'OK',
        });
      }
    });
    
  };
  return (
    <div>
      <div className="homeSection">
        <div className="homeContainer">
          <div className="homeContent">
            <div className="homeLeft">
              <h3>The Biggest Job Placed</h3>
              <h1>The Easiest <span className='BnrTitleEdit'>Way to Get</span> Your New Job</h1>
              <p>Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day.Join now today</p>
              
              
              <button className='ExploreBtn' onClick={handleExploreClick}>
                Explore Now
              </button> 
            </div>
            <div className="homeRight">
              <div className="headerImg">
              <img src="https://i.ibb.co/9WnKS8x/istockphoto-1447332295-612x612.jpg" alt="istockphoto-1447332295-612x612" border="0"/>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="titleWraper">
      <h1 className='latestTitle'>Latest Jobs</h1>
      <div className="jobMainContainer">
      {
        data.slice(0,6).map((latest)=><LatestJob key={latest.id} latest={latest}/>)
      }
      </div>
      <div className="exploreWrapper">
      <NavLink className='exploreMoreBtn' to='./jobs'>Explore More</NavLink>
      </div>
      </div>
    </div>
  )
}

export default Home
