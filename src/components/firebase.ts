import { initializeApp } from 'firebase/app';
import { getAuth, TwitterAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB0WZhW3YQcUTH8zdzLKgPv6vh3S0EAro8",
  authDomain: "pixir-6d3cb.firebaseapp.com",
  projectId: "pixir-6d3cb",
  storageBucket: "pixir-6d3cb.appspot.com",
  messagingSenderId: "1035920511052",
  appId: "1:1035920511052:web:56309b94eb21c1f2c824e9",
  measurementId: "G-KPZQTLXNLG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const twitterProvider = new TwitterAuthProvider();

export { auth, twitterProvider };
