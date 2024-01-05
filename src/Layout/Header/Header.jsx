import './header.css'
import {  NavLink } from 'react-router-dom'

import { useAuthState } from 'react-firebase-hooks/auth';

import { signOut } from 'firebase/auth';
import auth from '../../fireConfig/FirebaseConfig';


function Header() {
  const[user] = useAuthState(auth)
  const logout = ()=>{
    signOut(auth)
    
  }
  return (
    <div className='headerSection'>
      <div className="headerContainer">
       
        <div className="headerMenu">
          <nav>
          <input type="checkbox" id='check' />
            <label htmlFor="check" className='checkbtn'><i className="fa-solid fa-bars"></i></label>
              <div className="headerLogo">
                <NavLink to= '/'><h1>HALAL JIBIKA</h1></NavLink>
                </div>
                <ul>
              
              <div className="navMenu">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/jobs">Jobs</NavLink>
                <NavLink to="/jobs/id/favorite">Favorite</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </div>
              <div className="signMenu">
              {user ? (
            <>
              <NavLink to="/profile">{user?.displayName} {user?.photoURL?<img   src={user?.photoURL} alt=""/> :"SignUp"}</NavLink>
              <NavLink onClick={logout}>LogOut</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/signin">SignIn</NavLink>
              <NavLink to="/signup">SignUp</NavLink>
            </>
          )}
                </div>
            </ul>
           
            
          </nav>
         
        </div>
      </div>
    </div>
  )
}

export default Header
