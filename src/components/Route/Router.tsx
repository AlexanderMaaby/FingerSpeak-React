import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotFound from "../Pages/NotFound"
import Profile from "../Pages/Profile";
import StartUp from "../Pages/StartUp";
import Translate from "../Pages/Translate";

const Router = () => {
    return (
<BrowserRouter>
    <Switch>
        <Route path="/" component={StartUp} exact={true}/>
        <Route path="/translate" component={Translate} exact={true}/>
        <Route path="/profile" component={Profile} exact={true}/>
        <Route path="*" component={NotFound}/>
    </Switch>
</BrowserRouter>
    )
}
export default Router