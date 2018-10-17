import React from 'react';




export class NavigationBox extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div className="sidebar-header">
                    <h3>Main Navigation</h3>
                </div>

                <ul>
                    <li className="active"><a href="dashboard.html"><i className="fas fa-chart-line"></i> Dashboard</a>
                    </li>
                    <li><a href="listView.html"><i className="fas fa-th-list"></i>ListView</a></li>
                </ul>
            </div>
        )
    }
}