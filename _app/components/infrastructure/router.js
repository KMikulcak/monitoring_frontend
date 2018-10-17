import React from 'react';
import {BrowserRouter, Route, Switch, Router} from 'react-router-dom';
import {Dashboard} from "../Content/modules/monitoring/dashboard";
import {ListView} from "../Content/modules/monitoring/listView";
import {Detail} from "../Content/modules/monitoring/detail";

export const AppRouter = (props) => {
    return (
        <Router history={props.history}>
            <Switch>
                <Route
                    path='/monitoring'
                    component={Dashboard}
                    exact={true}
                />
                <Route
                    path='/monitoring/listView/:state?/:count?/detail/:id'
                    component={Detail}
                />
                <Route
                    path='/monitoring/listView/:state?/:count?'
                    component={ListView}
                />
                <Route
                    path='/monitoring/dashboard'
                    component={Dashboard}
                />
                <Route
                    path='/mdlt'
                    render={() => <div>mdlt</div>}
                />
                <Route
                    path='/ptot'
                    render={() => <div>ptopt</div>}
                />
            </Switch>
        </Router>
    );
}