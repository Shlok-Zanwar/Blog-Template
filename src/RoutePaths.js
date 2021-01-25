import React, { useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import BlogTemplate from './BlogTemplates/BlogTemplate';
import Home from './HomeComponents/Home';
import MyNavbar from "./MyNavbar";

function RoutePaths() {
    // let location = useLocation();
    var forUseEffect;
    useEffect(() => {
        localStorage.removeItem("redirectTo");
        // alert(window.location.pathname)
    }, [forUseEffect])

    return (
        <Router>
            <MyNavbar />

            <Switch>
                {/* <Route exact path="/">
                    
                </Route> */}
                <Route path="/blogs/toxicbot">
                    <BlogTemplate blogData={require("./BlogJsons/ToxicbotBlog.json")} />
                </Route>
                <Route path="/blogs/todo">
                    <BlogTemplate blogData={require("./BlogJsons/TodoBlog.json")} />
                </Route>
                <Route path="/todo-app">
                    {/* <TodoApp /> */}
                </Route>
                <Route path="/">
                    {
                        localStorage.getItem('redirectTo') ? <Redirect to={localStorage.getItem('redirectTo')} /> 
                        : null
                        
                    }
                    <Home />
                </Route>

            </Switch>
        </Router>
    )
}

export default RoutePaths
