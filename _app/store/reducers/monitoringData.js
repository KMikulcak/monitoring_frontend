
const defaultStateDiagram = {
    id:1,
    stateList:[
        {"state":"Ordered","count":6},
        {"state":"Generated","count":5},
        {"state":"Enriched","count":4},
        {"state":"Injected","count":3},
        {"state":"OrderedError","count":1},
        {"state":"GeneratedError","count":1},
        {"state":"EnrichedError","count":1},
        {"state":"InjectedError","count":0}
        ]
}

const defaultState ={
    stateDiagram: defaultStateDiagram
}

export const monitoringDataReducer = (state= defaultState, action)=>{
    switch(action.type){
        case 'FETCH_STATE_DIAGRAM':
            return {
                ...state,
                stateDiagram: action.stateDiagram
            };
        case 'ERROR_FETCHING_STATE_DIAGRAM':
            return{
                ...state,
                stateDiagram: defaultStateDiagram
            };
        default:
            return state;
    }
}

