import React, {useContext, useEffect, useState} from "react";
import /*firebase,*/ {auth} from "../components/firebase";
import "firebase/auth";

const AuthContext: any = React.createContext(undefined);

export function useAuth():React.Context<unknown> {
	return useContext(AuthContext);
}

export function AuthProvider({ children }: any): JSX.Element {
	const [currentUser, setCurrentUser]: any = useState();
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

	function updateEmail(email: string) {
		return currentUser?.updateEmail(email);
	}

	function updatePassword(password: string) {
		return currentUser?.updatePassword(password);
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