import './latestjob.css'
import { NavLink } from 'react-router-dom';

function LatestJob({latest}) {
    const {logo,title,companyName,position} = latest
  return (
    <div>
       <div className="latestJobSection">
         <div className="latestjobContainer">
          <div className="latestJobs">
            <div className="latestJob">
              <div className="latestImg">
                <img src={logo} alt="Image Logo" />
              </div>
              <div className="latestContent">
                <div className="jobContentWrap">
                <h1>{title}</h1>
                <h2>{companyName}</h2>
                <h3>{position}</h3>
                </div>
                <div className="jobBtnWrap">
                    <NavLink className='LatestJobBtn' to='jobs/:id/applynow'>Apply Now</NavLink>
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default LatestJob
