import React from 'react';





export class Row extends React.Component{
    constructor(props){
        super(props);
        //this.renderOverviewChart = this.renderOverviewChart.bind(this);
        this.state = {
            _overviewChart: undefined,
            _throughputChart: undefined,
            overviewChart: undefined,
            throughputChart: undefined

        }
    }
    componentDidMount(){
        this.renderOverviewChart();
        this.renderThroughputChart();
    }
    componentDidUpdate(){
        this.renderOverviewChart();
        this.renderThroughputChart();
    }
    renderOverviewChart(){
        const chart =  new Chart(this.state._overviewChart.getContext("2d"), {
            type: 'bar',
            data: {
                labels: ["Ordered", "Generated", "Enriched", "Injected", "Bank recieved", "Bank processed"],
                datasets: [{
                    label: "Status",
                    data: [9, 4, 8, 15, 18, 9],
                    backgroundColor: [
                        'rgba(75, 192, 210, 0.2)',
                        'rgba(75, 192, 210, 0.2)',
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
                        'rgba(75, 192, 192, 1)',
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1,
                    stack: 'a'
                },
                    {
                        label: "Errors",
                        data: [-3, -5, -2, -7, -4, -8],
                        backgroundColor: [
                            'rgba(255,99,132, 0.2)',
                            'rgba(255,99,132, 0.2)',
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
                            'rgba(255,99,132,1)',
                            'rgba(255,99,132,1)',
                        ],
                        borderWidth: 1,
                        stack: 'b'
                    }
                ]
            },
            options: {
                onClick: function(c,i) {

                    e = i[0];
                    console.log(e._index)
                    var x_value = this.data.labels[e._index];
                    var y_value = this.data.datasets[0].data[e._index];
                    console.log(x_value);
                    console.log(y_value);

                    location.href = "ListView.html";
                },
                legend: {
                    display: true
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
            }
        });
        this.setState(()=>({
            overviewChart:chart
        }));
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
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm12 col-xs-12">
                        <div className="block">
                            <div className="block-content-header">
                                <h2>Status Overview</h2>
                                <small>Status overview defined by 2 DataInputs, amount of Status, amount of Errors in
                                    Status
                                </small>
                                <div className="block-content-body">
                                    <canvas
                                        ref={(elmnt)=>{
                                            this.setState(()=>({
                                                overviewChart: elmnt
                                            }))
                                        }}
                                        id="OverviewChart"
                                    >
                                    </canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm12 col-xs-12">
                        <div className="block">
                            <div className="block-content-header">
                                <h2>Status Throughput</h2>
                                <small>Throughput of all stats in period of time</small>
                            </div>
                            <div className="block-content-body">
                                <canvas
                                    ref={(elmnt)=>{
                                        this.setState(()=>({
                                            throughputChart: elmnt
                                        }))
                                    }}
                                    id="ThroughputChart"
                                >
                                </canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
