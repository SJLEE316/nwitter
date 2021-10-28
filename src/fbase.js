// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/compat/app"; // firebase/compat/app에 포함된 모든 모듈을 firebase라는 객체에 부여
import "firebase/compat/auth"; // 인증 모듈을 사용할 것이므르 인증 모듈을 import

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
// export default firebase.initializeApp(firebaseConfig); // firebase 객체에서 initializeApp 함수를 사용
firebase.initializeApp(firebaseConfig); // 다른 파일에서 참조할 필요 없으므로 fbase.js 파일 안에서 실행되도록 코드 수정
export const authService = firebase.auth(); // 로그인을 위한 firebase.auth()는 다른 파일에서 참조할 것이므로 authService에 담아 내보내도록 코드 추가
export const firebaseInstance = firebase; // 소셜 로그인에 필요한 provider는 firebase에 있으므로 firebase 전체를 익스포트한다.
