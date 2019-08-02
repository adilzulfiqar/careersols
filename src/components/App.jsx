import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Forgot from "./layout/forms/Forgot";
import Home from "./layout/home/Home";
import Blog from "./layout/blog/Blog";
import Signup from "./layout/forms/Signup";
import EmailVerification from "./verification/EmailVerification";

export default class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path={"/"} component={Home} />
                    <Route path={"/signup"} component={Signup} />
                    <Route path={"/forgot"} component={Forgot} />
                    <Route path={"/blog"} component={Blog} />
                    <Route
                        path={"/verification/:id"}
                        component={EmailVerification}
                    />
                </Switch>
            </div>
        );
    }
}
