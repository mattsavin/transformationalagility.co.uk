import React, { Component } from "react";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import home from "./pages/home";
import about from "./pages/about";
import contact from "./pages/contact";
import blog from "./pages/blog";
import casestudies from "./pages/casestudies";
import login from "./pages/login";
import {AuthProvider} from "./context/AuthContext";

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

    render () {
        // console.log(this.state.apiResponse);
        return (
            <>
                <Router>
                    <AuthProvider>
                        <Navbar />
                        <Switch>
                            <Route path="/" exact component={home}/>
                            <Route path="/about" exact component={about}/>
                            <Route path="/casestudies" exact component={casestudies}/>
                            <Route path="/blog" exact component={blog}/>
                            <Route path="/contact" exact component={contact}/>
                            <Route path="/login" exact component={login}/>
                        </Switch>
                    </AuthProvider>

                </Router>
            </>
        );
    }
}

export default App;
