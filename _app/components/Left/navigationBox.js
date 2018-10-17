import React from 'react';
import {getModule, module} from "../infrastructure/moduleHelper";
import {withHistoryContext} from "../../app";


export class _NavigationBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navigation: this.getNavigation(getModule(props.history.location.pathname)),
        }
    }

    getNavigation(module){
        switch(module){
            case module.MONITORING:
                return ["dashboard", "listView"]
            case module.PTOT:
                return []
            case module.MDLT:
                return []
            default:
                return null
        }
    }

    render() {
        return (
            <div>
                <div className="sidebar-header">
                    <h3>Main Navigation</h3>
                </div>

                <ul>
                    <li className="active">
                        <a href="dashboard.html"><i className="fas fa-chart-line"></i> Dashboard</a>
                    </li>
                    <li>
                        <a href="listView.html"><i className="fas fa-th-list"></i>ListView</a></li>
                </ul>
            </div>
        )
    }
}

export const NavigationBox = withHistoryContext(_NavigationBox);