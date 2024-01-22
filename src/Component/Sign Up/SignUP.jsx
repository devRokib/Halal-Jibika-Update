
// import {useCreateUserWithEmailAndPassword, useUpdateProfile} from'react-firebase-hooks/auth'
// import './signup.css'
// import { NavLink, useNavigate } from 'react-router-dom';

// // import auth from "../../fireConfige/FirebaseConfig";
// import { toast } from "react-toastify";
// import Loading from "../Loading/Loading";
// import SocialAccount from "../SocialAccount/SocialAccount";
// import { useEffect, useState } from 'react';
// import auth from '../../fireConfig/FirebaseConfig';


// function SignUp() {
//     const [createUserWithEmailAndPassword,
//            user,loading,error ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })
//            const navigate = useNavigate()

//            const [updateProfile,updating] = useUpdateProfile(auth)
//            if(loading||updating){
//             <Loading/>
//            }

         
//           useEffect(() => {
//            const errorData = (()=>{
//             if (error) {
//               if(error.code === 'auth/email-already-in-use'){
//                return toast.error('email is already taken')
//               }
//               else{
//                 console.log(error.message)
//               }
//             }
//            })
//            errorData()
            
//           }, [error]);
           
//            useEffect(() => {
//            const userData = (()=>{
//             if (user) {
//               navigate('/');
//               return toast.success('Successfully Submitted !')
//             }
//            })
//            userData()
//           }, [user, navigate]);


//   const formSubmitHandler = (async(e)=>{
//         e.preventDefault();
//         let name = e.target.name.value;
//         let email = e.target.email.value;
//         let password = e.target.password.value;
//         let confirmPassword = e.target.confirmPassword.value;
        
//           e.target.reset();
//           if(!name || !email || !password || password !==confirmPassword){
//            return toast.error("Please Provide a valid value")
//           }
          
//         else{
//             await createUserWithEmailAndPassword(email,password)
//             await updateProfile({displayName:name})
//           }
//    })
//   return (
//     <div className='signupSection'>
//         <div className="formContainer">
//           <h1>Create Account</h1>
          
//           <form action="#" onSubmit={formSubmitHandler}>
//             <SocialAccount/>
//            <input  type="text" name="name" id="name" placeholder='Full Name' />

//             <input type="email" name="email" id="email" placeholder='Email' />

//             <input type="password" name="password" id="password" placeholder='Password' />

//             <input type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm Password' />

//             <input id="submitBtn" type="submit" value="Sign Up" />

//             <NavLink className='login' to= '/signin'>You have an account? Log in</NavLink>

//           </form>
//         </div>
//     </div>
//   )
// }

// export default SignUp
import { useCreateUserWithEmailAndPassword, useUpdateProfile, GoogleAuthProvider } from 'react-firebase-hooks/auth';
import './signup.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';
import SocialAccount from '../SocialAccount/SocialAccount';
import { useEffect, useState } from 'react';
import auth from '../../fireConfig/FirebaseConfig';
import { GoogleAuthProvider } from 'firebase/auth';


// Initialize GoogleAuthProvider
const googleAuthProvider = new GoogleAuthProvider();

function SignUp() {
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, {
    sendEmailVerification: true,
  });

  const navigate = useNavigate();

  const [updateProfile, updating] = useUpdateProfile(auth);

  if (loading || updating) {
    return <Loading />;
  }

  useEffect(() => {
    const errorData = () => {
      if (error) {
        if (error.code === 'auth/email-already-in-use') {
          return toast.error('Email is already taken');
        } else {
          console.log(error.message);
        }
      }
    };
    errorData();
  }, [error]);

  useEffect(() => {
    const userData = () => {
      if (user) {
        navigate('/');
        return toast.success('Successfully Submitted!');
      }
    };
    userData();
  }, [user, navigate]);

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    let confirmPassword = e.target.confirmPassword.value;

    e.target.reset();
    if (!name || !email || !password || password !== confirmPassword) {
      return toast.error('Please Provide a valid value');
    } else {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
    }
  };

  return (
    <div className='signupSection'>
      <div className='formContainer'>
        <h1>Create Account</h1>

        <form action='#' onSubmit={formSubmitHandler}>
          <SocialAccount />
          <input type='text' name='name' id='name' placeholder='Full Name' />

          <input type='email' name='email' id='email' placeholder='Email' />

          <input type='password' name='password' id='password' placeholder='Password' />

          <input type='password' name='confirmPassword' id='confirmPassword' placeholder='Confirm Password' />

          <input id='submitBtn' type='submit' value='Sign Up' />

          <NavLink className='login' to='/signin'>
            You have an account? Log in
          </NavLink>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
