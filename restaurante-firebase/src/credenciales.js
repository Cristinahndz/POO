// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTO7JLRsstcbqcyiQTwcaej5C4-Rtx_G0",
  authDomain: "restaurante-62d3f.firebaseapp.com",
  projectId: "restaurante-62d3f",
  storageBucket: "restaurante-62d3f.appspot.com",
  messagingSenderId: "332384338459",
  appId: "1:332384338459:web:a082ad9e91092b4646aebe"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase