import * as React from "react";
import {Route, Redirect, useHistory} from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({Component, ...rest}: any) {
	const currentUser: any = useAuth();

	if (typeof(currentUser) == "undefined") {
		const history = useHistory();
		history.push("/login");
		return (<Redirect to="/login" />);
	} else {
		return (
			<Route
				{...rest}
				render={props => {
					return currentUser ? <Component {...props} /> : <Redirect to={"/login"} />;
				}}
			>
			</Route>
		);
	}
}
