import React from 'react';




export class ModuleToolNavigation extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <ul className="nav navbar-nav navbar-right header-navi">
                <li><a href="#"><i
                    className="fas fa-info-circle header-navi-icons"></i><span
                    className="badge badge-primary">22</span></a></li>
                <li><a href="#"><i
                    className="fas fa-filter header-navi-icons"></i></a></li>
            </ul>
        )
    }
}