// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE78Ecz96iiPbyebssu-hF690PRRE11gA",
  authDomain: "curso-react-gdlizarraga.firebaseapp.com",
  projectId: "curso-react-gdlizarraga",
  storageBucket: "curso-react-gdlizarraga.firebasestorage.app",
  messagingSenderId: "15189756687",
  appId: "1:15189756687:web:84410d21a3058ac0410c7a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//export default app;

export const db = getFirestore(app);
