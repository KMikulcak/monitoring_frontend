import React from "react";
import {Header} from "./components/Top/header";
import {RightSidebarHolder} from "./components/Right/rightSidebarHolder";
import {LeftSidebarHolder} from "./components/Left/leftSidebarHolder";
import ReactDOM from "react-dom";
import {AppRouter} from "./components/infrastructure/router";
import '../js/all.js';
import'../css/Site.css';
import '../css/all.css';

console.log('executed');
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
                <RightSidebarHolder/>
                <LeftSidebarHolder/>
                <AppRouter/>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App/>,root);

