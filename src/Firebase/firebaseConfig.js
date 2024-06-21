




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_LGQY2o6op9yqaAX_dWYoUz_3dTLfSg0",
  authDomain: "tourism-website-e8f36.firebaseapp.com",
  projectId: "tourism-website-e8f36",
  storageBucket: "tourism-website-e8f36.appspot.com",
  messagingSenderId: "971816593279",
  appId: "1:971816593279:web:0cabe462102ca4f86e1c4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
