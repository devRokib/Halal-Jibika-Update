import { useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";
import { toast } from "react-toastify";
import './editJob.css'


function EditJob() {
  const [error,setError] = useState();
  const [formData, setFormData] = useState({
    title: "",
    companyName: "",
    position: "",
    logo: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const handleChange = async (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault(event);
    try {
      const response = await fetch(`https://api-server-kzsn.onrender.com/jobs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!formData.title) {
        toast.error('Title is required')
      } 
      else if (!formData.companyName) {
        toast.error('CompanyName is required')
      } 
      else if (!formData.position) {
        toast.error('Position is required')
      } 
      else if (!formData.logo) {
        toast.error('logo is required')
      } 
      else {
        toast.success("Job updated successfully!");
        navigate("/jobs");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="editSection">
      <div className="editformContainer">
        <div className="editForm">
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <br />
            <input
              onChange={handleChange}
              type="text"
              name="title"
              id="title"
            />
            <br /> <br />
            <label htmlFor="companyName">Company Name</label>
            <br />
            <input
              onChange={handleChange}
              type="text"
              name="companyName"
              id="companyName"
            />
            <br /> <br />
            <label htmlFor="position">Position</label>
            <br />
            <input
              onChange={handleChange}
              type="text"
              name="position"
              id="position"
            />
            <br /> <br />
            <label htmlFor="logo">Logo Url</label>
            <br />
            <input onChange={handleChange} type="text" name="logo" id="logo" />
            <br /> <br />
            <button type="submit">Edit Job</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditJob;
