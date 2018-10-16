import React from 'react';


export class Row extends React.Component{
    constructor(props){
        super(props);
        //this.renderStateDiagram = this.renderStateDiagram.bind(this);
        this.state = {


        }
    }

    render(){
       return(
           <div className="row">
               <div className="col-lg-12 col-md-12 col-sm12 col-xs-12">
                   <div className="block">
                       <div className="block-content-header">
                           <h2>{this.props.title}</h2>
                           {this.props.subtitle ?
                               <small>{this.props.subtitle}</small>
                               :
                               null
                           }
                       </div>
                       <div className="block-content-body">
                           <this.props.content/>
                       </div>
                   </div>
               </div>
           </div>
       );
    }
}
