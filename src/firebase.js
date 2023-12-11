// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBESaPBk0h9nyzYDYZS_fKCjFULlNirU60",
    authDomain: "hakim-5d2c6.firebaseapp.com",
    projectId: "hakim-5d2c6",
    storageBucket: "hakim-5d2c6.appspot.com",
    messagingSenderId: "94047673032",
    appId: "1:94047673032:web:48710f831512e4644b23fd"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
