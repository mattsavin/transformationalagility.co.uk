import React, {useContext, useEffect, useState} from "react";
import {auth} from "../components/firebase";
import firebase from "firebase/app";
import "firebase/auth";
import * as PropTypes from "prop-types";

const AuthContext = React.createContext(undefined);

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);

	function signup(email: string, password: string) {
		return auth.createUserWithEmailAndPassword(email, password);
	}

	function login(email: string, password: string) {
		return auth.signInWithEmailAndPassword(email, password);
	}

	function logout() {
		return auth.signOut();
	}

	function resetPassword(email: string) {
		return auth.sendPasswordResetEmail(email);
	}

	function updateEmail(email: any) {
		return currentUser.updateEmail(email);
	}

	function updatePassword(password: any) {
		return currentUser.updatePassword(password);
	}

	useEffect(() => {
		return auth.onAuthStateChanged(user => {
			setCurrentUser(user);
			setLoading(false);
		});
	}, []);


	const value = {
		currentUser,
		login,
		logout,
		signup,
		resetPassword,
		updateEmail,
		updatePassword
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}

AuthProvider.propTypes = {
	children: PropTypes.any
};