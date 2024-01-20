import React, { useState } from 'react';
import './addJob.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
function AddJob() {
    const [jobData, setJobData] = useState({
        title: '',
        companyName: '',
        description: '',
        position: '',
        logo:'',
    });
    const [error,setError] = useState()
    const navigate = useNavigate()
    const handleChange = (event) => {
        setJobData({ ...jobData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
         if (!jobData.title || !jobData.companyName || !jobData.description || !jobData.position || !jobData.logo) {
            return toast.error('Please fill in all required fields.');
            
        }
        else{
         }
         try {
            const response = await axios.post(`https://api-server-kzsn.onrender.com/jobs`, jobData);
           setJobData({
                title,
                companyName,
                description,
                position,
                logo,
            });
            navigate('/jobs')
            return   Swal.fire(
                'Added!',
                'The job has been added successfully.',
                'success'
              );
        } catch (error) {
           error(error);
        }
    };
    
    return (
        <div className="addJobSection">
            <div className="addJobContainer">
                <div className="formContainer">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" name="title" value={jobData.title} onChange={handleChange} />

                        <label htmlFor="companyName">Company Name:</label>
                        <input type="text" id="companyName" name="companyName" value={jobData.companyName} onChange={handleChange}  />

                        <label htmlFor="description">Description:</label>
                        <input type='text' id="description" name="description" value={jobData.description} onChange={handleChange}  />

                        <label htmlFor="position">Position:</label>
                        <input type="text" id="position" name="position" value={jobData.position} onChange={handleChange}  />

                        <label htmlFor="logo">Logo Url</label>
                        <input type="text" id="logo" name="logo" value={jobData.logo} onChange={handleChange} /> <br />

                        <button type="submit">Add Job</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddJob;

