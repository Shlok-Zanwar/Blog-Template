import React, { useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import BlogTemplate from './BlogTemplates/BlogTemplate';
import Home from './HomeComponents/Home';
import MyNavbar from "./MyNavbar";
import BlogApi from "./BlogTemplates";

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
                <Route path="/blogs/">
                    <BlogApi />
                </Route>

                <Route path="/blogs/toxicbot">
                    <BlogTemplate blogData={require("./BlogJsons/ToxicbotBlog.json")} />
                </Route>
                <Route path="/blogs/todo-app">
                    <BlogTemplate blogData={require("./BlogJsons/TodoBlog.json")} />
                </Route>
                <Route path="/blogs/dock-forms">
                    <BlogTemplate blogData={require("./BlogJsons/DockFormsBlog.json")} />
                </Route>
                <Route path="/blogs/hotel-management">
                    <BlogTemplate blogData={require("./BlogJsons/HotelManagmentBlog.json")} />
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
