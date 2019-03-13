import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import BarGraph from './BarGraph';
import Inbox from './Inbox';
import Calendar from './Calendar';
import LineGraph from './LineGraph';
import Projects from './Projects';

class Home extends Component {
    state = {
        data : [
            {
                name: '1', uv: 4000, pv: 2400, amt: 2400,
            },
            {
                name: '2', uv: 3000, pv: 1398, amt: 2210,
            },
            {
                name: '3', uv: 2000, pv: 9800, amt: 2290,
            },
            {
                name: '4', uv: 2780, pv: 3908, amt: 2000,
            },
            {
                name: '5', uv: 1890, pv: 4800, amt: 2181,
            },
            {
                name: '6', uv: 2390, pv: 3800, amt: 2500,
            },
            {
                name: '7', uv: 3490, pv: 4300, amt: 2100,
            },
            {
                name: '8', uv: 2045, pv: 9800, amt: 2290,
            },
            {
                name: '9', uv: 1790, pv: 3908, amt: 2000,
            },
            {
                name: '10', uv: 2222, pv: 4800, amt: 2181,
            },
            {
                name: '11', uv: 2590, pv: 3800, amt: 2500,
            },
            {
                name: '12', uv: 3000, pv: 4300, amt: 2100,
            }
        ],
        select: 'year',
        inbox: [
            {
                id: 1,
                name: 'Michelle Stewart',
                time: 'Today, 5:32 PM',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.'
            },
            {
                id: 2,
                name: 'Jolene Slater',
                time: 'Today, 5:32 PM',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.'
            },
            {
                id: 3,
                name: 'Lyall Roach',
                time: 'Today, 5:32 PM',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.'
            }
        ],
        projects: [
            {
                id: 1,
                project: 'Mobile App',
                company: 'Google',
                price: 15000
            },
            {
                id: 2,
                project: 'Dashboard',
                company: 'Amazon',
                price: 30000
            },
            {
                id: 3,
                project: 'Site develompent',
                company: 'Amazon',
                price: 25000
            },
            {
                id: 4,
                project: 'UI mockup',
                company: 'Symu.co',
                price: 10000
            },
            {
                id: 5,
                project: 'Mobile App',
                company: 'Google',
                price: 1500
            }
        ]
    };

    handleChange = event => {
        this.setState({
            select: event.target.value
        });
        this.changeGraph();
    };

    changeGraph = () => {
        const {select} = this.state;
        const monthData = [
            {
                name: '1', uv: 1000, pv: 2400, amt: 2400,
            },
            {
                name: '2', uv: 3200, pv: 1398, amt: 2210,
            },
            {
                name: '3', uv: 2222, pv: 9800, amt: 2290,
            },
            {
                name: '4', uv: 1780, pv: 3908, amt: 2000,
            },
            {
                name: '5', uv: 3019, pv: 4800, amt: 2181,
            },
            {
                name: '6', uv: 900, pv: 3800, amt: 2500,
            },
            {
                name: '7', uv: 1789, pv: 4300, amt: 2100,
            },
            {
                name: '8', uv: 3219, pv: 9800, amt: 2290,
            },
            {
                name: '9', uv: 1888, pv: 3908, amt: 2000,
            },
            {
                name: '10', uv: 3000, pv: 4800, amt: 2181,
            },
            {
                name: '11', uv: 3200, pv: 3800, amt: 2500,
            },
            {
                name: '12', uv: 1980, pv: 4300, amt: 2100,
            }
        ];
        const initialData = [
            {
                name: '1', uv: 4000, pv: 2400, amt: 2400,
            },
            {
                name: '2', uv: 3000, pv: 1398, amt: 2210,
            },
            {
                name: '3', uv: 2000, pv: 9800, amt: 2290,
            },
            {
                name: '4', uv: 2780, pv: 3908, amt: 2000,
            },
            {
                name: '5', uv: 1890, pv: 4800, amt: 2181,
            },
            {
                name: '6', uv: 2390, pv: 3800, amt: 2500,
            },
            {
                name: '7', uv: 3490, pv: 4300, amt: 2100,
            },
            {
                name: '8', uv: 2045, pv: 9800, amt: 2290,
            },
            {
                name: '9', uv: 1790, pv: 3908, amt: 2000,
            },
            {
                name: '10', uv: 2222, pv: 4800, amt: 2181,
            },
            {
                name: '11', uv: 2590, pv: 3800, amt: 2500,
            },
            {
                name: '12', uv: 3000, pv: 4300, amt: 2100,
            }
        ];
        if(select === 'month') {
            this.setState({
                data: initialData
            })
        } else {
            this.setState({
                data: monthData
            })
        }
    };

    render () {
        const {inbox, select, data, lineData, projects} = this.state;

        return (
            <div className="home-wrapper">
                <Row>
                    <Col xs="9">
                        <div className="line-wrapper">
                            <LineGraph
                                linedata={lineData}
                            />
                        </div>
                    </Col>
                    <Col xs="3">
                        <Projects projects={projects}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs="6">
                        <BarGraph
                            handleChange={this.handleChange}
                            select={select}
                            data={data}
                        />
                    </Col>
                    <Col xs="3">
                        <Inbox inbox={inbox}/>
                    </Col>
                    <Col xs="3">
                        <Calendar/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home;