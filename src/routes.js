import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Index from "./pages/index";
import Simples from "./pages/simples";
import Infinito from "./pages/infinitos";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Index}></Route>
                <Route path="/simples" component={Simples}></Route>
                <Route path="/infinitos" component={Infinito}></Route>
            </Switch>
        </BrowserRouter>
    );
}
