import React from 'react';
import {module} from "./infrastructure/enums";



export class Header extends React.Component{
    constructor(props){
        super(props);
        //this.renderHeader = this.renderHeader.bind(this);
    }

    /*
    renderHeader = (currentModule)=>{
        switch (currentModule) {
            case module.MDLT:
                return(
                    <h1 className="header-title">
                        Monitoring | PTOT | MDLT Selected
                    </h1>
                )
        }
    }*/


    render(){
        return(
            <nav className="navbar navbar-fixed-top spf_color">
                <div className="container-fluid header">
                    <div className="navbar-header">
                        <h1 className="header-title">
                            Monitoring Selected | PTOT | MDLT
                        </h1>

                    </div>

                    <ul className="nav navbar-nav navbar-right header-navi">
                        <li><a href="#"><i
                            className="fas fa-info-circle header-navi-icons"></i><span
                            className="badge badge-primary">22</span></a></li>
                        <li><a href="#"><i
                            className="fas fa-filter header-navi-icons"></i></a></li>
                    </ul>
                </div>
                <div className="container-fluid filterbar" id="filterBar" style={{"display": "none"}}>
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
            </nav>
        )
    }
}

export default Header;