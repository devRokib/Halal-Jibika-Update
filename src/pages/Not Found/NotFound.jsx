import React from 'react'
import { NavLink } from 'react-router-dom'

function NotFound() {
  return (
    <div style={{display:'flex',flexDirection:'column',height:'100vh',alignItems:'center',justifyContent:'center'}}>
      <h1 style={{display:'flex',alignItems:'center',justifyContent:'center',}}>Page Not Found</h1>
      <NavLink style={{display:'inline-block',background:'blue',padding:'8px 18px',fontSize:'22px',color:'#fff',marginTop:'10px'}} to='/'>Go to Home</NavLink>
    </div>
  )
}

export default NotFound
