import React from 'react';



export class LoadingComponent extends React.Component {
    constructor(props){
        super(props);
    }
    isLoading(){

    }
    render(){
        if(this.isLoading()){
            return <div className="loader"></div>
        }else{
            return this.render();
        }
    }
}