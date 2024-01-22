import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
// import auth from '../fireConfige/FirebaseConfig'
import { Navigate, useLocation } from 'react-router-dom'
import Swal from 'sweetalert2'
// import auth from '../fireConfig/FirebaseConfig'
import { auth } from './../fireConfig/FirebaseConfig';

function PrivateRoute({ children }) {
    const [user] = useAuthState(auth)
    const location = useLocation()
    
    if(!user){
        Swal.fire({
            title:'Please at first Signup !',
            icon:'warning'

        })
        return <Navigate to='/signup' state={{from:location}} replace/>
    }else{
     return (
        <>
            {children}
        </>
    )
   }  
}

export default PrivateRoute;
