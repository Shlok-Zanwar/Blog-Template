import React from 'react'
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BlogTemplate from './BlogTemplates/BlogTemplate';
import Home from './HomeComponents/Home';
import MyNavbar from "./MyNavbar";

function RoutePaths() {
    return (
        <Router>
            <MyNavbar />

            <Switch>
            
            <Route path="/blogs/todo">
                <BlogTemplate blogData={require("./BlogJsons/todoblog.json")} />
            </Route>
            <Route path="/todo">
                {/* <Users /> */}
            </Route>
            <Route path="/">
                <Home />
            </Route>
            </Switch>
        </Router>
    )
}

export default RoutePaths
