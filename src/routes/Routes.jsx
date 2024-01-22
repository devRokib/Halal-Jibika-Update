import { createBrowserRouter } from "react-router-dom";
import App from "../App";
// import Home from "../pages/Home/Home";
import About from "../pages/About/About";
// import Jobs from "../pages/Jobs/Jobs";
import Contact from "../pages/Contact/Contact";
import Favorite from "../pages/Favorite/Favorite";
import SignIn from "../Component/Sign In/SignIn";

import NotFound from "../pages/Not Found/NotFound";
import JobDetails from "../pages/Jobs/JobDetails/JobDetails";
// import EditJob from "../Component/Edit Job/EditJob";
import ApplyNow from "../Component/ApplyNow/ApplyNow";
import AddJob from "../Component/AddJob/AddJob";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "../Component/User Profile/Profile";
import EditProfile from "../Component/EditProfile/EditProfile";
import SignUp from './../Component/Sign Up/SignUP';
import Home from './../pages/Home/MainHome/MainHome';
import Jobs from './../pages/Jobs/MainJobs/MainJobs';
import EditJob from './../Component/EditJob/EditJob';




const routes = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
              path:'/',
              element:<Home/>,
              loader:async ()=>fetch(`https://api-server-kzsn.onrender.com/jobs`)
             },
            {
              path:'/about',
              element:<About/>
            },
            {
              path:'/jobs',
              element:<Jobs/>,
              loader:()=>fetch("https://api-server-kzsn.onrender.com/jobs")
            },
            {
              path:'/contact',
              element:<Contact/>
            },
            {
              path:'/jobs/:id/favorite',
              element:<Favorite/>,
              loader:({params})=>fetch(`https://api-server-kzsn.onrender.com/jobs/${params.id}`)
            },
            {
              path:'/signin',
              element:<SignIn/>
            },
            {
              path:'/addjob/:id/',
              element:(
                <PrivateRoute>
                  <AddJob/>
                </PrivateRoute>
              ),
              loader:({params})=>fetch(`https://api-server-kzsn.onrender.com/jobs/${params.id}`)
            },
            {
              path:'/signup',
              element:<SignUp/>,
             },
            {
              path:'/profile',
              element:<UserProfile/>,
             },
            {
              path:'/editprofile',
              element:<EditProfile/>,
             },
             {
              path:'/jobs/:id/',
              element:<JobDetails/>,
              loader:({params})=>fetch(`https://api-server-kzsn.onrender.com/jobs/${params.id}`)
             },
             {
              path:'/jobs/:id/editjob',
              element:<EditJob/>,
             },
             {
              path:'jobs/:id/applynow',
              element:(
                <PrivateRoute>
                <ApplyNow/>
                </PrivateRoute>
              ),
              loader:({params})=>fetch(`https://api-server-kzsn.onrender.com/jobs/${params.id}`)
             }
         ]
     },
    {
        path:'*',
        element:<NotFound/>
    }
])
export default routes ;