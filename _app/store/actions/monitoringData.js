
import {networkError} from "./errors";

export const fetchStateDiagram = ()=> {
    return (dispatch, getState) => {

        return new Promise((resolve, reject) => {

            const req = new XMLHttpRequest();
            req.onload = () => {
                if (req.status === 200) {
                    dispatch({
                        type: 'FETCH_STATE_DIAGRAM',
                        stateDiagram: JSON.parse(req.response)
                    });
                } else {
                    //dispatch(networkError('ERROR_FETCHING_STATE_DIAGRAM', req.status, req.message));
                    dispatch('ERROR_FETCHING_STATE_DIAGRAM', undefined);
                }
            }
            req.open('GET', "localhost:8000/stateDiagram/Filter", true);
            //setup headers for the request

            //req.setHeader("Content-Type", "")

            req.send();
        });
    }
}

export const fetchThroughputDiagram = ()=> {
    return (dispatch, getState) => {

        return new Promise((resolve, reject) => {

            const req = new XMLHttpRequest();
            req.onload = () => {
                if (req.status === 200) {
                    dispatch({
                        type: 'FETCH_THROUGHPUT_DIAGRAM',
                        stateDiagram: JSON.parse(req.response)
                    });
                } else {
                    //dispatch(networkError('ERROR_FETCHING_STATE_DIAGRAM', req.status, req.message));
                    dispatch('ERROR_FETCHING_THROUGHPUT_DIAGRAM', undefined);
                }
            }
            req.open('GET', "localhost:8000/stateDiagram/Filter", true);
            //setup headers for the request

            //req.setHeader("Content-Type", "")

            req.send();
        });
    }
}

