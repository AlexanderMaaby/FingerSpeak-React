import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotFound from "./NotFound";
import Profile from "../Profile/Profile";
import StartUp from "../StartUp/StartUp";
import Translate from "../../Translate";

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