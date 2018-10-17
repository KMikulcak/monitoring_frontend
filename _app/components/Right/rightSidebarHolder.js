import React from 'react';
import {MessageBox} from "./messageBox";
import {connect} from "react-redux";


class _RightSidebarHolder extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        if(this.props.shouldRender){
            return(
                <section>
                    <aside className="right_sidebar" id="messagesFrame">
                        <MessageBox/>
                    </aside>
                </section>
            )
        }else{
            return null;
        }
    }
}

const mapStateToProps = (state,props)=>{
    return{
        shouldRender: state.uiState.isRightSideBarRendering
    };
}

export const RightSidebarHolder = connect(mapStateToProps,undefined)(_RightSidebarHolder);