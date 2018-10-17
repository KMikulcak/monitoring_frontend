import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {uiStateReducer} from "./reducers/uiState";
import {monitoringDataReducer} from './reducers/monitoringData';

export const configureStore =  () =>{
    const store = createStore(
        combineReducers({
        uiState: uiStateReducer,
        monitoringData: monitoringDataReducer
    }),
        compose(applyMiddleware(thunk))
    );
    return store;
}





