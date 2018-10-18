import React from 'react';
import {fetchThroughputDiagram} from '../../../../../store/actions/monitoringData';
import {connect} from 'react-redux';
import {Line} from 'react-chartjs-2';

class _ThroughputDiagram extends React.Component {
    constructor(props) {
        super(props);
        this.renderThroughputDiagram = this.renderThroughputDiagram.bind(this);
    }

    componentDidMount() {
        console.log('dispatching action from component');
        this.props.dispatch(fetchThroughputDiagram());
        //dispatch action to fech stateDiagram
    }

    renderLoadingSpinner() {
        return (
            <div className="loader dashboardLoader">
            </div>
        )
    }

    getThroughputDiagramData(data){
        if(!data){return undefined;}

        /*
        const nonErrors = [];
        const errors = [];

        data.stateList.forEach((stateDiagramPoint)=>{
            const isError = stateDiagramPoint.state.includes('Error');
            if(isError){
                errors.push(stateDiagramPoint);
            }else{
                nonErrors.push(stateDiagramPoint);
            }
        });

        return {
            labels: nonErrors.map((stateDiagramPoint)=>stateDiagramPoint.state),
            datasets: [{
                label: "Status",
                data: nonErrors.map((stateDiagramPoint)=>stateDiagramPoint.count),
                backgroundColor: [
                    'rgba(75, 192, 210, 0.2)',
                    'rgba(75, 192, 210, 0.2)',
                    'rgba(75, 192, 210, 0.2)',
                    'rgba(75, 192, 210, 0.2)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
                stack: 'a'
            },
                {
                    label: "Errors",
                    data: errors.map((stateDiagramPoint)=>-stateDiagramPoint.count),
                    backgroundColor: [
                        'rgba(255,99,132, 0.2)',
                        'rgba(255,99,132, 0.2)',
                        'rgba(255,99,132, 0.2)',
                        'rgba(255,99,132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(255,99,132,1)',
                        'rgba(255,99,132,1)',
                        'rgba(255,99,132,1)',
                    ],
                    borderWidth: 1,
                    stack: 'b'
                }
            ]
        };
        */
    }

    render() {
        return (
            <div>ThrouhputDiagram</div>
        )
        /*
        const data = this.getThroughputDiagramData(this.props.throughputDiagram);

        if(!data){return this.renderLoadingSpinner();}

        const chart = new Chart(this.state._throughputChart.getContext("2d"), {
            type: 'line',
            data: {
                datasets: [{
                    label: "Errors",
                    data: [{
                        x: new Date().setHours(4),
                        y: 1
                    }, {
                        x: new Date().setHours(5),
                        y: 4
                    }, {
                        x: new Date().setHours(6),
                        y: 8
                    }, {
                        x: new Date().setHours(7),
                        y: 10
                    }, {
                        x: new Date().setHours(8),
                        y: 5
                    }, {
                        x: new Date().setHours(9),
                        y: 2
                    }, {
                        x: new Date().setHours(10),
                        y: 1
                    }, {
                        x: new Date().setHours(11),
                        y: 15
                    }],
                    backgroundColor: [
                        'rgba(255,99,132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                    ],
                    borderWidth: 1
                }, {
                    label: "Ordered",
                    data: [{
                        x: new Date().setHours(4),
                        y: 2
                    }, {
                        x: new Date().setHours(5),
                        y: 1
                    }, {
                        x: new Date().setHours(6),
                        y: 4
                    }, {
                        x: new Date().setHours(7),
                        y: 1
                    }, {
                        x: new Date().setHours(8),
                        y: 2
                    }, {
                        x: new Date().setHours(9),
                        y: 5
                    }, {
                        x: new Date().setHours(10),
                        y: 7
                    }, {
                        x: new Date().setHours(11),
                        y: 5
                    }],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: "Generated",
                    data: [{
                        x: new Date().setHours(4),
                        y: 10
                    }, {
                        x: new Date().setHours(5),
                        y: 2
                    }, {
                        x: new Date().setHours(6),
                        y: 2
                    }, {
                        x: new Date().setHours(7),
                        y: 5
                    }, {
                        x: new Date().setHours(8),
                        y: 1
                    }, {
                        x: new Date().setHours(9),
                        y: 5
                    }, {
                        x: new Date().setHours(10),
                        y: 2
                    }, {
                        x: new Date().setHours(11),
                        y: 1
                    }],
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 206, 86, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: "Enriched",
                    data: [{
                        x: new Date().setHours(4),
                        y: 0
                    }, {
                        x: new Date().setHours(5),
                        y: 0
                    }, {
                        x: new Date().setHours(6),
                        y: 2
                    }, {
                        x: new Date().setHours(7),
                        y: 10
                    }, {
                        x: new Date().setHours(8),
                        y: 0
                    }, {
                        x: new Date().setHours(9),
                        y: 10
                    }, {
                        x: new Date().setHours(10),
                        y: 15
                    }, {
                        x: new Date().setHours(11),
                        y: 11
                    }],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: "Injected",
                    data: [{
                        x: new Date().setHours(4),
                        y: 10
                    }, {
                        x: new Date().setHours(5),
                        y: 3
                    }, {
                        x: new Date().setHours(6),
                        y: 7
                    }, {
                        x: new Date().setHours(7),
                        y: 17
                    }, {
                        x: new Date().setHours(8),
                        y: 3
                    }, {
                        x: new Date().setHours(9),
                        y: 3
                    }, {
                        x: new Date().setHours(10),
                        y: 20
                    }, {
                        x: new Date().setHours(11),
                        y: 2
                    }],
                    backgroundColor: [
                        'rgba(139,69,19, 0.2)',
                    ],
                    borderColor: [
                        'rgba(139,69,19, 1)',
                    ],
                    borderWidth: 1
                }
                ]
            },
            options: {
                spanGaps: true,
                steppedLine: true,
                title: {
                    display: false,
                    text: ''
                },
                scales: {
                    xAxes: [{
                        type: 'time',
                        time: {
                            unit: 'hour',
                            displayFormats: {
                                quarter: 'HH'
                            }
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        this.setState(() => ({
            throughputChart: chart
        }));
        */
    }
}

const mapStateToProps = (state, props) => {
    return {
        throughputDiagram: state.monitoringData.throughputDiagram
    }
}

export const ThroughputDiagram = connect(mapStateToProps, undefined)(_ThroughputDiagram);