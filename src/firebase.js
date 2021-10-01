// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/compat/app"; // firebase/compat/app에 포함된 모든 모듈을 firebase라는 객체에 부여

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY, // 사용할 때는 process.env.를 붙임
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig); // firebase 객체에서 initializeApp 함수를 사용
