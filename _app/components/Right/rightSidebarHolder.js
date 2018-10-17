import React from 'react';
import {MessageBox} from "./messageBox";




export class RightSidebarHolder extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <section>
                <aside className="right_sidebar" id="messagesFrame" style={{"display": "none"}}>
                    <MessageBox/>
                </aside>
            </section>
        )
    }
}
