import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({Component, ...rest}: any): JSX.Element {
	const currentUser: any = useAuth();

	return (
		<Route
			{...rest}
			render={props => {
				return currentUser.currentUser ? <Component {...props} /> : <Redirect to={"/login"} />;
			}}
		>
		</Route>
	);
}
