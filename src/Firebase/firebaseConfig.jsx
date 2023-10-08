// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFdMUIT7o0vTHJjQuVDWWKZLtmPWEwGTw",
  authDomain: "wealth-sharechat.firebaseapp.com",
  projectId: "wealth-sharechat",
  storageBucket: "wealth-sharechat.appspot.com",
  messagingSenderId: "1079539550492",
  appId: "1:1079539550492:web:78cf0074bbbdd4ef5252d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig