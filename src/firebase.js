// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, addDoc, getDoc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAuyo4tSBAXm2MHFoS2c2K9rcsitMMpgYA",
	authDomain: "react-projects-91718.firebaseapp.com",
	projectId: "react-projects-91718",
	storageBucket: "react-projects-91718.appspot.com",
	messagingSenderId: "1084346061014",
	appId: "1:1084346061014:web:b02ada3bff12af0571f977",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export {
	getAuth,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	createUserWithEmailAndPassword,
	getFirestore,
	addDoc,
	getDoc,
	setDoc,
};
