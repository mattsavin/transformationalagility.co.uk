import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import home from "./pages/home";
import about from "./pages/about";
import contact from "./pages/contact";
import blog from "./pages/blog";



function App() {
  return (
    <>
        <Router>
           <Navbar />
            <Switch>
                <Route path="/" exact component={home}/>
                <Route path="/about" exact component={about}/>
                <Route path="/contact" exact component={contact}/>
                <Route path="/blog" exact component={blog}/>
            </Switch>
        </Router>
    </>
  );
}

export default App;
