

const defaultState = {
    isRightSideBarRendering: false
}


export const uiStateReducer = (state = defaultState, action)=>{
    switch(action.type){
        case 'TOGGLE_RIGHTSIDEBAR':
            return{
                ...state,
                isRightSideBarRendering: !state.isRightSideBarRendering
            }
        default:
            return state;
    }
}
