// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.vite.apiKey,
  authDomain:import.meta.vite.authDomain,
  projectId:import.meta.vite.projectId,
  storageBucket:import.meta.vite.storageBucket,
  messagingSenderId:import.meta.vite.messagingSenderId,
  appId:import.meta.vite.appId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);