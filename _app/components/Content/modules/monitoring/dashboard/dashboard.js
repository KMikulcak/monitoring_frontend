import React from 'react';
import {RowHolder} from '../../../rowHolder';
import {connect} from 'react-redux';
import {Line, Bar} from 'react-chartjs-2';
import {fetchStateDiagram} from '../../../../../store/actions/monitoringData';

class _Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.renderStateDiagram= this.renderStateDiagram.bind(this);
    }

    renderContent(){
        return(
            <div>
                Hello world
            </div>
        )
    }

    componentDidMount(){
        console.log('dispatching action from component');
        this.props.dispatch(fetchStateDiagram());
        //dispatch action to fech stateDiagram
    }

    getStateDiagramData(data){
        if(!data){return undefined;}

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
    }

    renderLoadingSpinner(){
        return(
            <div className="loader dashboardLoader">
            </div>
        )
    }

    renderStateDiagram(){
        const data = this.getStateDiagramData(this.props.stateDiagram);

        if(!data){return this.renderLoadingSpinner();}

        return(
            <Bar
                data={data}
                options={{
                    onClick: function(c,i) {
                       var e = i[0];
                        var x = this.data.labels[e._index];
                        var y = this.data.datasets[0].data[e._index];
                        window.location.href = `/monitoring/listView/${x}/${y}`;
                    },
                    legend: {   display: true
                    },
                    tooltips: {
                    callbacks: {
                    label: function(tooltipItem) {
                    return tooltipItem.yLabel;
                }
                }
                },
                    title: {
                    display: false,
                    text: ''
                },
                    scales: {
                    yAxes: [{
                    stacked: true,
                    ticks: {
                    callback: function (value, index, values) {
                    return value < 0 ? -value : value;
                }
                }
                }],
                    xAxes: [{
                    stacked: true,
                    ticks: {
                    beginAtZero:true,
                    mirror: true
                }
                }]
                }
                }}
            />
        );
    }

    renderThroughputChart(){

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
                },{
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
                },{
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
                },{
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
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
        this.setState(()=>({
            throughputChart:chart
        }));
    }

    render(){
        return(
            <RowHolder
                title='DASHBOARD'
                rows={[
                    {
                        title: 'StateDiagram',
                        subtitle: '',
                        content: this.renderStateDiagram
                    },
                    {
                        title: 'ThroughputDiagram',
                        subtitle: '',
                        content: this.renderContent//this.renderThroughputDiagram
                    }
                ]}
            />
        );
    }
};

const mapStateToProps = (state,props)=>{
    return{
        stateDiagram: state.monitoringData.stateDiagram
    }
}


export const Dashboard = connect(mapStateToProps, undefined)(_Dashboard);

