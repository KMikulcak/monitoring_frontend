import React from 'react';




export class ModuleToolBar extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
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
    }
}