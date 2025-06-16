import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCD06PH2i8IqhOiO3JvMMi6V7C7zjb_58s",
  authDomain: "tailwind-cf.firebaseapp.com",
  projectId: "tailwind-cf",
  storageBucket: "tailwind-cf.firebasestorage.app",
  messagingSenderId: "770081878396",
  appId: "1:770081878396:web:896590c6b681087c10b4f9",
  measurementId: "G-HEK98QFZPY",
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
