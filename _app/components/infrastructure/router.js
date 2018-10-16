import React from 'react';
import {BrowserRouter, Route, Switch, Router} from 'react-router-dom';
import {Dashboard} from "../modules/monitoring/dashboard";
import {ListView} from "../modules/monitoring/listView";
import {Detail} from "../modules/monitoring/detail";


const Monitoring = (props)=>{
    console.log(props);
    return(
        <div>
            <Route exact path={`${props.match.path}/`} component={Dashboard}/>
            <Route path={`${props.match.path}/dashboard/`} component={Dashboard}/>
            <Route path={`${props.match.path}/listView/:state?/:count?`} component={ListView}/>
            <Route path={`${props.match.path}/detail/:id`} component={Detail}/>
        </div>
    );
}
/*
*          <Route
                path='/monitoring/detail/:id'
                render={(props) => <div>Detail: {props.match.param.id}</div>}
            />
            <Route
                path='/monitoring/listView(/:state)(/:count)'
                render={(props) => <div>ListView: {props.match.param.state} | {props.match.param.count}</div>}
            />
            <Route
                path='/monitoring/dashboard'
                component={Dashboard}
            />

*
* */

export const AppRouter = (props) => {
    return (
        <BrowserRouter
            basename='/'
        >
            <Switch>
                <Route
                    path='/monitoring'
                    component={Monitoring}>

                </Route>

                <Route
                    path='/mdlt'
                    render={() => <div>mdlt</div>}
                />
                <Route
                    path='/ptot'
                    render={() => <div>ptopt</div>}
                />
            </Switch>

        </BrowserRouter>
    );
}