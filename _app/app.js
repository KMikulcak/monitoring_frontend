import React from "react";
import {Header} from "./components/header";
import {RightSidebar} from "./components/rightSidebar";
import {LeftSidebar} from "./components/leftSidebar";
//import {RowHolder} from "./components/content";
import ReactDOM from "react-dom";
import {AppRouter} from "./components/infrastructure/router";
import '../../js/all.js';
import'../../css/Site.css';
import '../../css/all.css';


const root = document.getElementById('app');

class App extends React.Component {
    constructor(props) {
        super(props);

        //set up initial state for the component
    }

    render(){
        return (
            <React.Fragment>
                <Header/>
                <RightSidebar/>
                <LeftSidebar/>
                <AppRouter/>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App/>,root);

