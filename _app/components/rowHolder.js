import React from 'react';
import {Row} from './row';



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
                    {this.props.rows.map((row, index)=>{
                            return(
                                <Row
                                    key={`row_${index}`}
                                    title={row.title}
                                    subtitle={row.subtitle}
                                    content={row.content}
                                />
                            )
                    })}
                </div>
            </section>
        )
    }
}

