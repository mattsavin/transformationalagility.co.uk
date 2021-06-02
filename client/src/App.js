import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import home from "./pages/home";
import about from "./pages/about";
import contact from "./pages/contact";
import blog from "./pages/blog";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentWillMount() {
        this.callAPI();
    }

    render () {
        return (
            <>
                <p className="App-intro">{this.state.apiResponse}</p>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route path="/" exact component={home}/>
                        <Route path="/about" exact component={about}/>
                        <Route path="/blog" exact component={blog}/>
                        <Route path="/contact" exact component={contact}/>
                    </Switch>
                </Router>
            </>
        );
    }
}

export default App;
