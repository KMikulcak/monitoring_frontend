import React from 'react';
import {connect} from 'react-redux';
import {toggleRightSideBar, toggleFilterBar} from "../../store/actions/uiState";

class _toolBar extends React.Component {
    constructor(props) {
        super(props);
        this.toggleRightSideBar = this.toggleRightSideBar.bind(this);
        this.toggleFilterBar = this.toggleFilterBar.bind(this);
    }

    toggleRightSideBar(){
        this.props.dispatch(toggleRightSideBar());
    }

    toggleFilterBar(){
        this.props.dispatch(toggleFilterBar());
    }

    render() {
        return (
            <ul className="nav navbar-nav navbar-right header-navi">
                <li><a onClick={this.toggleRightSideBar}><i
                    className="fas fa-info-circle header-navi-icons"></i><span
                    className="badge badge-primary">22</span></a></li>
                <li><a onClick={this.toggleFilterBar}><i
                    className="fas fa-filter header-navi-icons"></i></a></li>
            </ul>
        )
    }
}

export const ToolBar = connect(undefined,undefined)(_toolBar);