import React from 'react';
import {RowHolder} from '../../../rowHolder';
import {StateDiagram} from "./stateDiagram";
import {ThroughputDiagram} from "./throughputDiagram";

export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <RowHolder
                title='DASHBOARD'
                rows={[
                    {
                        title: 'StateDiagram',
                        subtitle: '',
                        content:
                            <StateDiagram/>
                    },
                    {
                        title: 'ThroughputDiagram',
                        subtitle: '',
                        content: <ThroughputDiagram/>
                    }
                ]}
            />
        );
    }
}

