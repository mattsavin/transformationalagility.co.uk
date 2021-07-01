import firebase from "firebase/app";
import "firebase/auth";

let app;

if (!firebase.apps.length) {
	app = firebase.initializeApp({
		apiKey: "AIzaSyCGhVse_nCkNJNF9v8zRnOMID1Wmg6KEmg",
		authDomain: "transformationalagility.firebaseapp.com",
		projectId: "transformationalagility",
		storageBucket: "transformationalagility.appspot.com",
		messagingSenderId: "181454487168",
		appId: "1:181454487168:web:818703de129e5e96b9f065",
		measurementId: "G-245W20GPDT"
	
	});
} else {
	app = firebase.app(); // if already initialized, use that one
}

export const auth = app.auth();
export default app;
