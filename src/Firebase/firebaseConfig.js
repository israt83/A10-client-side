






// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjnj8lqdY4wvSq7kiw1SjgEy8kKVXLBuM",
  authDomain: "tourism-websites.firebaseapp.com",
  projectId: "tourism-websites",
  storageBucket: "tourism-websites.appspot.com",
  messagingSenderId: "573631836618",
  appId: "1:573631836618:web:a4b9b65db1ea12a2005f33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
