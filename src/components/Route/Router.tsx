import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotFound from "../Pages/NotFound";
import Profile from "../Pages/Profile";
import StartUp from "../Pages/StartUp";
import Translate from "../Pages/Translate";
import Navbar from "./Navbar";
import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" component={StartUp} exact={true}/>
                <ProtectedRoute path="/translate" component={Translate} exact={true}/>
                <ProtectedRoute path="/profile" component={Profile} exact={true}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Router