import React from "react";
import Navbar from "./components/navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import home from "./pages/home";
import about from "./pages/about";
import contact from "./pages/contact";
import blog from "./pages/blog";
import caseStudies from "./pages/caseStudies";
import login from "./pages/login";
import signup from "./pages/signup";
import {AuthProvider} from "./contexts/AuthContext";
import dashboard from "./pages/dashboard";
import PrivateRoute from "./components/privateRoute";
import forgotPassword from "./pages/forgotPassword";
import updateProfile from "./pages/updateProfile";
import smoothscroll from "smoothscroll-polyfill";
import blogArticles from "./components/blogArticles";
import NotFound from "./pages/404";

smoothscroll.polyfill();
declare global {
	interface Window {
		__forceSmoothScrollPolyfill__: boolean;
	}
}
window.__forceSmoothScrollPolyfill__ = true;


export default class App extends React.Component {
	render(): JSX.Element {
		return (
			<Router>
				<AuthProvider>
					<Navbar/>
					<Switch>
						<Route path="/" exact component={home}/>
						<Route path="/about" exact component={about}/>
						<Route path="/caseStudies" exact component={caseStudies}/>
						<Route path="/blog/:id" exact component={blogArticles}/>
						<Route path="/blog" exact component={blog}/>
						<Route path="/contact" exact component={contact}/>
						<Route path="/login" exact component={login}/>
						<Route path="/signup" exact component={signup}/>
						<Route path="/404" exact component={NotFound}/>
						<Route path={"/forgot-password"} exact component={forgotPassword}/>
						<PrivateRoute path={"/update-profile"} component={updateProfile}/>
						<PrivateRoute path={"/dashboard"} component={dashboard}/>
					</Switch>
				</AuthProvider>
			</Router>
		);
	}
}
