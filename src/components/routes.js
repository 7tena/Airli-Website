import React from 'react'
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import AboutUs from "./aboutus";
import Businessplan from "./businessplan";
import Main from "./main";
export default function Routes() {
    return (
         <Router>
        <Switch>
         
        <Route path='/aboutus' component={AboutUs}/>
        <Route path="/other" component={Businessplan}/>
        <Route path='/' component={Main}/>  
        </Switch>
        </Router>
    )
}
