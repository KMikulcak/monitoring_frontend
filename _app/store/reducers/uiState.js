

const defaultState = {
    isRightSideBarRendering: false,
    isFilterBarRendering: false
}


export const uiStateReducer = (state = defaultState, action)=>{
    switch(action.type){
        case 'TOGGLE_RIGHTSIDEBAR':
            return{
                ...state,
                isRightSideBarRendering: !state.isRightSideBarRendering
            }
        case 'TOGGLE_FILTERBAR':
            return{
                ...state,
                isFilterBarRendering: !state.isFilterBarRendering
            }
        default:
            return state;
    }
}
