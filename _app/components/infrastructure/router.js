import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Dashboard} from "../monitoring/dashboard";


export const AppRouter = (props) =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route
                    path='/monitoring/detail/:id'
                />
                <Route
                    path='/monitoring/listView'
                />
                <Route
                    path='/monitoring/'
                    exact={false}
                    component={Dashboard}
                />
                <Route
                    path='/mdlt'
                />
                <Route
                    path='/ptot'
                />
            </Switch>
        </BrowserRouter>
    )
}