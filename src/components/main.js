import React from "react";
import Navigation from "./navigation";
import Footer from "./footer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./home";
import AboutUs from './aboutus';
import Businessplan from './businessplan';

function Main() {
    
    
    return (
       <Router>
            <Navigation />
            <Switch>
                <Route exact path='/' component={Home}/> 
                <Route path='/aboutus' component={AboutUs}/>
                <Route path="/other" component={Businessplan}/> 
            </Switch>
            <Footer />
        </Router>
    );
}

export default Main;
