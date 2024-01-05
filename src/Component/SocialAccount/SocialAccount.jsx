import './socialaccount.css'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth'
// import auth from '../../fireConfige/FirebaseConfig'
import { NavLink, useNavigate } from 'react-router-dom'
import Loading from '../Loading/Loading'
import { toast } from 'react-toastify'
import auth from '../../fireConfig/FirebaseConfig';


function SocialAccount() {
    const [signInWithGoogle,googleUser,googleLoading,gooleError] = useSignInWithGoogle(auth)
    const [signInWithGithub,githubUser,githubLoading,githubError] = useSignInWithGithub(auth)
    const navigate = useNavigate()
    let errorElement;
    if(googleLoading || githubLoading){
        return <Loading/>
    }
    if(gooleError || githubError){
        <p>
            Error:{googleError?.message}
            Error:{githubError?.message}
        </p>
    }
    // if(googleUser || githubUser){
    //     navigate('/');
    //     toast.success('Log in Successfully')
    // }
  return (
    <div>
      <div className="buttonContainer">
          <NavLink to='/' onClick={()=>signInWithGoogle()} className='signWithGoogle'>
            <span className="GoogleContent">SignUp With </span>
            <span className="GoogleIcon"><FcGoogle/></span>
          </NavLink>
          <NavLink to='/' onClick={()=>signInWithGithub()} className='signWithGithub'>
            <span className="GithubContent">SignUp With </span>
            <span className="GithubIcon"><FaGithub /></span>
          </NavLink>
          </div>
    </div>
  )
}

export default SocialAccount
