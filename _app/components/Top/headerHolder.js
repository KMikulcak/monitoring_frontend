import React from 'react';
import {module} from "../infrastructure/moduleHelper";
import {NavigationBar} from "./navigationBar";
import {ToolBar} from "./toolBar";
import {FilterBar} from "./filterBar";



export class HeaderHolder extends React.Component {
    constructor(props) {
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


    render() {
        return (
            <nav className="navbar navbar-fixed-top spf_color">
                <div className="container-fluid header">

                    <NavigationBar/>

                    <ToolBar/>

                </div>

                <FilterBar/>

            </nav>
        )
    }
}

export default HeaderHolder;