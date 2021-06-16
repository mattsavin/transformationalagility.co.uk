import React, { Component } from "react";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import home from "./pages/home";
import about from "./pages/about";
import contact from "./pages/contact";
import blog from "./pages/blog";
import caseStudies from "./pages/caseStudies";
import login from "./pages/login";
import signup from "./pages/signup";
import { AuthProvider } from "./contexts/AuthContext";
import dashboard from "./pages/dashboard";
import PrivateRoute from "./components/privateRoute";
import forgotPassword from "./pages/forgotPassword";
import updateProfile from "./pages/updateProfile";

class App extends Component {
  /*constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentDidMount() {
        this.callAPI();
    }*/

  render() {
    return (
      <Router>
        <AuthProvider>
          <Navbar />
          <Switch>
            <Route path="/" exact component={home} />
            <Route path="/about" exact component={about} />
            <Route path="/caseStudies" exact component={caseStudies} />
            <Route path="/blog" exact component={blog} />
            <Route path="/contact" exact component={contact} />
            <Route path="/login" exact component={login} />
            <Route path="/signup" exact component={signup} />
            <Route path={"/forgot-password"} exact component={forgotPassword} />
            <Route path={"/update-profile"} exact component={updateProfile} />
            <PrivateRoute path={"/dashboard"} exact component={dashboard} />
          </Switch>
        </AuthProvider>
      </Router>
    );
  }
}

export default App;
