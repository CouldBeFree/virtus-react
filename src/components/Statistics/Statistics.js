import React, { Component } from 'react';
import ProgressBar from './progressBar';
import {Bar} from 'react-chartjs-2';
import { connect } from 'react-redux';
import Table from './Table';
import 'react-circular-progressbar/dist/styles.css';

class Statistics extends Component {
    state = {
        lineChartConfig: {
            labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
            datasets: [{
                xAxisID: 'x-axis-2',
                type: 'line',
                data: [51, 55, 40, 49, 50, 37, 40],
                fill: true,
                borderColor: '#2196f3',
                backgroundColor: 'rgba(41, 66, 97, 0.5)',
                borderJoinStyle: 'miter',
                pointBorderColor: '#ffffff',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#ffffff',
                pointHoverBorderColor: '#256faf',
                pointHoverBorderWidth: 4,
                pointRadius: 1,
                pointHitRadius: 1,
            }, {
                type: 'bar',
                fill: false,
            }]
        },
        option: {
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            maintainAspectRatio: false,
            legend: false,
            responsive: true,
            tooltips: {
                mode: 'label'
            },
            elements: {
                line: {
                    fill: true,
                }
            },
            scales: {
                xAxes: [
                    {
                        mirror: true,
                        id: 'x-axis-1',
                        display: true,
                        position: 'bottom',
                        showBorder: false,
                        gridLines: {
                            color: '#3d404f',
                            showBorder: false,
                            display: true
                        },
                        ticks: {
                            beginAtZero: false,
                            min: 0,
                            padding: -40,
                        },
                    },
                    {
                        mirror: true,
                        id: 'x-axis-2',
                        display: false,
                        position: 'top',
                        showBorder: false,
                        gridLines: {
                            display: false,
                        },
                        scaleLabel: {
                            display: false
                        },
                        ticks: {
                            beginAtZero: true,
                            display: false
                        },
                    }
                ],
                yAxes: [
                    {
                        stacked: true,
                        type: 'linear',
                        display: true,
                        position: 'left',
                        id: 'y-axis-1',
                        gridLines: {
                            display: false,
                        },
                        scaleLabel: {
                            display: false
                        },
                        ticks: {
                            beginAtZero: true,
                            display: false,
                            max: 120
                        },
                        labels: {
                            show: false
                        }
                    },
                ]
            },
        },
        selected: 'week',
        circularData: this.props.year
    };

    getHeight = () => {
        let chartCustomHeight;
        window.screen.width <= 1500 ? chartCustomHeight = 600 : window.screen.width <= 1200 ? chartCustomHeight = 400 : chartCustomHeight = 620;
        return chartCustomHeight
    };

    getWidth = () => {
        let el = document.getElementById('main');
        return el.offsetWidth;
    };

    select = (event) => {
        const { year, month, week } = this.props;
        let circular;
        const value = event.target.value;
        if(value === 'year') {
            circular = year
        } else if (value === 'week'){
            circular = week
        } else {
            circular = month
        }
        this.setState({
            circularData: circular
        })
    };

    datasetKeyProvider = () => {
        return Math.random();
    };

    render () {
        const {circularData} = this.state;
        return (
            <div>
                <div className="progress-block d-flex align-items-center justify-content-between">
                    <div className="circular-wrap d-flex">
                        {circularData.map((item) => {
                            return (
                                <ProgressBar
                                    key={item.id}
                                    percent={item.percentage}
                                    value={item.value}
                                    info={item.info}
                                />
                            )
                        })}
                    </div>
                    <div className="select-wrap">
                        <span>Show: </span>
                        <select onChange={this.select}>
                            <option value="year">Year</option>
                            <option value="week">Week</option>
                            <option value="month">Month</option>
                        </select>
                    </div>
                </div>
                <div className="bar-block">
                    <Bar
                        data={this.state.lineChartConfig}
                        height={this.getHeight()}
                        width={this.getWidth()}
                        options={this.state.option}
                        datasetKeyProvider={this.datasetKeyProvider}
                    />
                </div>
                <div className="table-block">
                    <Table/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        year: state.year,
        week: state.week,
        month: state.month
    }
};

export default connect(mapStateToProps, {})(Statistics);