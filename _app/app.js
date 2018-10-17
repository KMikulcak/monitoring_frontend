import React from "react";
import {HeaderHolder} from "./components/Top/headerHolder";
import {RightSidebarHolder} from "./components/Right/rightSidebarHolder";
import {LeftSidebarHolder} from "./components/Left/leftSidebarHolder";
import createHistory from 'history/createBrowserHistory';
import  {Provider} from 'react-redux';
import ReactDOM from "react-dom";
import {configureStore} from './store/store';
import {AppRouter} from "./components/infrastructure/router";
import '../js/all.js';
import'../css/Site.css';
import '../css/all.css';

const root = document.getElementById('app');
const store = configureStore();
const HistoryContext = React.createContext();

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: createHistory()
        };

        //set up initial state for the component
    }

    render() {
        return (
            <React.Fragment>
                <Provider store={store}>
                    <HistoryContext.Provider value={this.state.history}>
                        <HeaderHolder/>
                        <RightSidebarHolder/>
                        <LeftSidebarHolder/>
                        <AppRouter history={this.state.history}/>
                    </HistoryContext.Provider>
                </Provider>
            </React.Fragment>
        );
    }
}

export function withHistoryContext(Component){
    return(props)=>{
        return(
            <HistoryContext.Consumer>
                {history => <Component history={history} {...props}/>}
            </HistoryContext.Consumer>
        );
    };
};


ReactDOM.render(<App/>,root);

