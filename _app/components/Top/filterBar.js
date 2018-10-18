import React from 'react';
import {connect} from "react-redux";




export class _FilterBar extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        if (this.props.shouldRender) {
            return (
                <div className="container-fluid filterbar">
                    Filter Options:
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                            Order by <span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu" role="menu">
                            <li><a href="#" id="btn1">Select 1</a></li>
                            <li><a href="#" id="btn2">Select 2</a></li>
                            <li><a href="#" id="btn3">Select 3</a></li>
                        </ul>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state,props)=>{
    return{
        shouldRender: state.uiState.isFilterBarRendering
    };
}

export const FilterBar = connect(mapStateToProps,undefined)(_FilterBar);