import React from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom"; // Renaming it to Router

import Users from "./user/pages/Users.js";
import NewPlace from "./places/pages/NewPlace.js";

function App(){ // exact is used to make it exact to that browser
    return (
        <Router>
            <Switch>
                <Route path="/" exact> 
                    <Users/>
                </Route>
                <Route path="/places/new" exact>
                    <NewPlace/>
                </Route>
                <Redirect to="/" />
            </Switch>    
        </Router>
    )
}

export default App;