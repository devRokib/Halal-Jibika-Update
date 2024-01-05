import { useState } from 'react';
import './apply.css'

import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function ApplyNow() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '', 
        companyName: '',
        position: '',
        number: '',
      });
      const navigate = useNavigate()
      const [error,setError] = useState()
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault(); 
        
        if (!formData.fullName || !formData.email || !formData.companyName || !formData.position || !formData.number) {
            toast.error('Please fill all Required Field ');
           }
       
          else{
            toast.success('Application submitted successfully!')
            navigate('/jobs/id')
            setFormData({
              fullName: '',
              email: '',
              companyName: '',
              position: '',
              number: '',
            });
          }
         
     };
    
  return (
    <div>
      <div className="applyNowSection">
        <div className="applyNowContainer">
              <h1 style={{textAlign:'center',marginBottom:'15px'}}>Apply For a Job</h1>
            <div className="applyNowForm">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="fullName">Your Full Name</label>
                    <input  onChange={handleChange} type="text" name="fullName" id="fullName" placeholder='Your Name'/><br /> <br />

                    <label htmlFor="email">Your Email</label>
                    <input onChange={handleChange} type="text" name="email" id="email" placeholder='Email' /><br /><br />

                    <label htmlFor="companyName">Company Name</label>
                    <input  onChange={handleChange} type="text" name="companyName" id="companyName" placeholder='Company Name' /><br /><br />

                    <label htmlFor="position">Position</label>
                    <input onChange={handleChange} type="text" name="position" id="position" placeholder='Position' /><br /><br />

                    <label htmlFor="number">Phone Number</label>
                    <input  onChange={handleChange} type="number" name="number" id="number" placeholder='Phone Number' /><br /><br />

                    <button type='submit'>Apply Now</button>

                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ApplyNow
