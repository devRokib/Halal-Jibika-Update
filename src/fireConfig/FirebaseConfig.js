
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {

  apiKey: import.meta.env.VITE_REACT_API_KEY,
  authDomain: import.meta.env.VITE_REACT_AUTHDOMAIN,
  projectId: import.meta.env.VITE_REACT_PROJECTID,
  storageBucket: import.meta.env.VITE_REACT_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_REACT_APPID,
  // apiKey: "AIzaSyBNQedlxA78JS7x1AtXmCKOBQIKfLEiQyk",
  // authDomain: "halal-jibika-35f28.firebaseapp.com",
  // projectId: "halal-jibika-35f28",
  // storageBucket: "halal-jibika-35f28.appspot.com",
  // messagingSenderId: "212127474027",
  // appId: "1:212127474027:web:e20aac129e86ac32466c2e"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
// export  auth ;