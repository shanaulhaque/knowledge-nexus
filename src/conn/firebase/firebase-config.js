import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'


const firebaseConfig = {
    apiKey: "",
    authDomain: "knowledgenexus-3da7f.firebaseapp.com",
    projectId: "knowledgenexus-3da7f",
    storageBucket: "knowledgenexus-3da7f.appspot.com",
    messagingSenderId: "302860970556",
    appId: "1:302860970556:web:45af16291bd986509b7139",
    measurementId: "G-MF4TGTNRYY"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);