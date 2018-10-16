import React from 'react';
import {Row} from './row';



export class Content extends React.Component{
    constructor(props){
        super(props);
        //set up initial state for the component
        this.state = {
            //anything you want
        };
    }

    //title changes
    //adding rows

    render(){
        return(
            <section className="content">
                <div className="container-fluid">
                    <div className="block-header">
                        <h2>DASHBOARD</h2>
                    </div>
                    <Row/>
                    {/*content*/}
                </div>
            </section>
        )
    }
}
