import React from 'react';
import {RowHolder} from "../../../rowHolder";


export class ListView extends React.Component{
    render(){
        return(
            <RowHolder
                title='ListView'
                rows={[
                    {
                        title: 'Test',
                        subtitle: '',
                        content: ()=><div>{this.props.match.params.state} - {this.props.match.params.count}</div>
                    }
                ]}
            />
        )
    }
}