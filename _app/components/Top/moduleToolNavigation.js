import React from 'react';
import {connect} from 'react-redux';
import {toggleRightSideBar} from "../../store/actions/uiState";


class _ModuleToolNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.toggleRightSideBar = this.toggleRightSideBar.bind(this);
    }
    toggleRightSideBar(){
        this.props.dispatch(toggleRightSideBar());
    }
    render() {
        return (
            <ul className="nav navbar-nav navbar-right header-navi">
                <li><a onClick={this.toggleRightSideBar} href="#"><i
                    className="fas fa-info-circle header-navi-icons"></i><span
                    className="badge badge-primary">22</span></a></li>
                <li><a href="#"><i
                    className="fas fa-filter header-navi-icons"></i></a></li>
            </ul>
        )
    }
}




export const ModuleToolNavigation = connect(undefined,undefined)(_ModuleToolNavigation);