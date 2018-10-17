import React from 'react';
import {module} from "../infrastructure/enums";
import {ModuleNavigation} from "./moduleNavigation";
import {ModuleToolNavigation} from "./moduleToolNavigation";
import {ModuleToolBar} from "./moduleToolBar";



export class Header extends React.Component {
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

                    <ModuleNavigation/>

                    <ModuleToolNavigation/>

                </div>

                <ModuleToolBar/>

            </nav>
        )
    }
}

export default Header;