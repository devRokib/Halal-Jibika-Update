
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBNQedlxA78JS7x1AtXmCKOBQIKfLEiQyk",
  authDomain: "halal-jibika-35f28.firebaseapp.com",
  projectId: "halal-jibika-35f28",
  storageBucket: "halal-jibika-35f28.appspot.com",
  messagingSenderId: "212127474027",
  appId: "1:212127474027:web:e20aac129e86ac32466c2e"
};
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth ;