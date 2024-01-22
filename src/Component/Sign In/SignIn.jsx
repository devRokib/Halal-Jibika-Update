import { NavLink,  useNavigate } from 'react-router-dom';
import  "./signin.css" ;
import Loading from '../Loading/Loading';
import {  useSignInWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
// import auth from '../../fireConfige/FirebaseConfig';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
// import auth from '../../fireConfig/FirebaseConfig';
import { auth } from './../../fireConfig/FirebaseConfig';

function SignIn() {
  const [signInUserWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth, { sendEmailVerification: true });
  const navigate = useNavigate();


  let [updateProfile, updating] = useUpdateProfile(auth);
  

  useEffect(() => {
    const errorData = (()=>{
     if (error) {
       if(error.code === 'auth/invalid-credential'){
        return toast.error('email is not valid')
       }
       else{
         console.log(error.message)
       }
     }
    })
    errorData()
     
   }, [error]);
    
    useEffect(() => {
    const userData = (()=>{
     if (user) {
       navigate('/');
       return toast.success('Successfully Logged In !')
     }
    })
    userData()
   }, [user, navigate]);
   if (loading || updating) {
      <Loading />;
  }
  const formSubmitHandler = async (e) => {
    e.preventDefault();

    const  email = e.target.email.value;
    const  password = e.target.password.value;
    e.target.reset();

    if (!email || !password) {
      return toast.error('This Field is required');
    }
     else {
      await signInUserWithEmailAndPassword(email, password, { silent: true });
      await updateProfile({ displayName: name });
   }
  };

  return (
    <div className='signinSection'>
      <div className="formContainer">
        <h1>Log In</h1>
        
        <form onSubmit={formSubmitHandler}>
          <input type="email" name="email" id="email" placeholder='Email' />
          <input type="password" name="password" id="password" placeholder='Password' />
          <input id="submitBtn" type="submit" value="Log In" />
          <NavLink className='signup' to='/signup'>You haven't an account? Sign up</NavLink>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
