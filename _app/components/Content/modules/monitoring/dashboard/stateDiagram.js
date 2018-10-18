import React from 'react';
import {fetchStateDiagram} from '../../../../../store/actions/monitoringData';
import {connect} from 'react-redux';
import {Bar} from 'react-chartjs-2';

class _StateDiagram extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        console.log('dispatching action from component');
        this.props.dispatch(fetchStateDiagram());
        //dispatch action to fech stateDiagram
    }

    renderLoadingSpinner(){
        return(
            <div className="loader dashboardLoader">
            </div>
        )
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

    render(){
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
}

const mapStateToProps = (state,props)=>{
    return{
        stateDiagram: state.monitoringData.stateDiagram
    }
}


export const StateDiagram = connect(mapStateToProps, undefined)(_StateDiagram);
