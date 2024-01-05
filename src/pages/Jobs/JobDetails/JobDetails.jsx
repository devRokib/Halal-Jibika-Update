
import { NavLink, useLoaderData } from 'react-router-dom'
import './jobdetails.css'
// import { NavLink } from 'react-router-dom';

function JobDetails() {
    const userData = useLoaderData()
    console.log(userData)
    const {logo,companyName,title,description,position} = userData
  return (
    <div className='jobDetailsSection'>
      <div className="jobDetailsContainer">
          <div className="jobDetailsItem">
            <div className="jobDetailsImg">
            <img src={logo} alt=""/>
            </div>

            <div className="detailsContent">
              <div className="jobDetailsContent">
                <h1>Company: {companyName}</h1>
                <h2>Title: {title}</h2>
                <h3>Position: {position}</h3>
                <p>Description: {description}</p>
              </div>
              <div className="jobApplyButton">
                <h1>Join Us Today</h1>
                <NavLink className='applyBtn' to='applynow'>APPLY NOW</NavLink>
              </div>
            </div>
          </div>
          <hr />
          <div className="jobFullInformation">
            <h1>Here are All Requirment</h1>
            <p>
                <strong> Minimum Qualifications:</strong>
               Education: Many roles require a bachelor's degree in a relevant field, though some positions may only require an associate's degree or relevant experience. Some highly technical roles, like software engineering, may require a master's degree or PhD.
                Experience: Most roles require some level of relevant experience, although the amount will vary depending on the position. Entry-level roles might only require a few years of experience, while senior roles could require 10 years or more.
                Technical Skills: Depending on the role, you may need skills in programming languages, data analysis, software development, machine learning, or other technical areas.
                Non-Technical Skills: Google also values strong communication, collaboration, problem-solving, and critical thinking skills.
            </p>
            <p>
               <strong>Additional Requirements:</strong>
               Leadership: Many roles, especially senior positions, require leadership experience. You may have demonstrated leadership through managing teams, taking initiative on projects, or mentoring others.
                Innovation: Google is a highly innovative company, so they're looking for candidates who are creative and can think outside the box. This could be demonstrated through your previous work experience, side projects, or even your answers during the interview process.
                Passion for Google's mission: Google wants to hire people who are passionate about their mission to "organize the world's information and make it universally accessible and useful." This can be shown through your knowledge of Google's products and services, your interest in technology, and your overall enthusiasm for the company.
            </p>
            <p>
                <strong> Minimum Qualifications:</strong>
               Education: Many roles require a bachelor's degree in a relevant field, though some positions may only require an associate's degree or relevant experience. Some highly technical roles, like software engineering, may require a master's degree or PhD.
                Experience: Most roles require some level of relevant experience, although the amount will vary depending on the position. Entry-level roles might only require a few years of experience, while senior roles could require 10 years or more.
                Technical Skills: Depending on the role, you may need skills in programming languages, data analysis, software development, machine learning, or other technical areas.
                Non-Technical Skills: Google also values strong communication, collaboration, problem-solving, and critical thinking skills.
            </p>
            <p>
               <strong>Additional Requirements:</strong>
               Leadership: Many roles, especially senior positions, require leadership experience. You may have demonstrated leadership through managing teams, taking initiative on projects, or mentoring others.
                Innovation: Google is a highly innovative company, so they're looking for candidates who are creative and can think outside the box. This could be demonstrated through your previous work experience, side projects, or even your answers during the interview process.
                Passion for Google's mission: Google wants to hire people who are passionate about their mission to "organize the world's information and make it universally accessible and useful." This can be shown through your knowledge of Google's products and services, your interest in technology, and your overall enthusiasm for the company.
            </p>
            <p>
                <strong> Minimum Qualifications:</strong>
               Education: Many roles require a bachelor's degree in a relevant field, though some positions may only require an associate's degree or relevant experience. Some highly technical roles, like software engineering, may require a master's degree or PhD.
                Experience: Most roles require some level of relevant experience, although the amount will vary depending on the position. Entry-level roles might only require a few years of experience, while senior roles could require 10 years or more.
                Technical Skills: Depending on the role, you may need skills in programming languages, data analysis, software development, machine learning, or other technical areas.
                Non-Technical Skills: Google also values strong communication, collaboration, problem-solving, and critical thinking skills.
            </p>
            <p>
               <strong>Additional Requirements:</strong>
               Leadership: Many roles, especially senior positions, require leadership experience. You may have demonstrated leadership through managing teams, taking initiative on projects, or mentoring others.
                Innovation: Google is a highly innovative company, so they're looking for candidates who are creative and can think outside the box. This could be demonstrated through your previous work experience, side projects, or even your answers during the interview process.
                Passion for Google's mission: Google wants to hire people who are passionate about their mission to "organize the world's information and make it universally accessible and useful." This can be shown through your knowledge of Google's products and services, your interest in technology, and your overall enthusiasm for the company.
            </p>
          </div>
      </div>
    </div>
  )
}

export default JobDetails
