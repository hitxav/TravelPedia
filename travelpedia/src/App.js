import React from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom"; // Renaming it to Router

import Users from "./user/pages/Users.js";
import NewPlace from "./places/pages/NewPlace.js";
import MainNavigation from "./shared/components/Navigation/MainNavigation.js";

function App(){ // exact is used to make it exact to that browser
    return (
        <Router>
            <MainNavigation/>
                <main> {/* main css add space between card and main navigation */}
                    <Switch>
                        <Route path="/" exact> 
                            <Users/>
                        </Route>
                        <Route path="/places/new" exact>
                            <NewPlace/>
                        </Route>
                        <Redirect to="/" />
                    </Switch>
                </main>    
        </Router>
    )
}

export default App;