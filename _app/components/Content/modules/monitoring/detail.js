import React from "react";
import {RowHolder} from "../../rowHolder";

export class Detail extends React.Component {
    render() {
        return (
            <RowHolder
                title='Detail'
                rows={[
                    {
                        title: 'Test',
                        subtitle: '',
                        content: () => <div>{this.props.match.params.id}</div>
                    }
                ]}
            />
        )
    }
}
