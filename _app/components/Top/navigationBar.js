import React from 'react';
import {withHistoryContext} from "../../app";
import {getModule} from "../infrastructure/moduleHelper";
import {ModuleNavigationLink} from "./moduleNavigationLink";


export class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navbar-header">
                    <ModuleNavigationLink
                        to='/monitoring'
                        title='Monitoring'
                    />
                    |
                    <ModuleNavigationLink
                        to='/ptot'
                        title='PTOT'
                    />
                    |
                    <ModuleNavigationLink
                        to='/mdlt'
                        title='MDLT'
                    />
            </div>
        )
    }
}


export const Enchanced = NavigationBar;