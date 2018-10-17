import React from 'react';
import {Rows} from './row';



export class RowHolder extends React.Component{
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
                        <h2>{this.props.title}</h2>
                    </div>
                    <Rows rows={this.props.rows} />
                </div>
            </section>
        )
    }
}

