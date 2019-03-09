import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import BarGraph from './BarGraph';

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
        const {inbox, select, data} = this.state;
        const modifiersStyles = {
            birthday: {
                color: 'white',
                backgroundColor: '#ffc107',
            },
            thursdays: {
                color: '#ffc107',
                backgroundColor: '#fffdee',
            },
        };

        return (
            <div className="home-wrapper">
                <Row>
                    <Col xs="6">
                        <BarGraph
                            handleChange={this.handleChange}
                            select={select}
                            data={data}
                        />
                    </Col>
                    <Col xs="3">
                        <div className="inbox">
                            <div className="inbox__top text-center">
                                <p>Inbox</p>
                            </div>
                            { inbox.map((item) => {
                                return (
                                    <div className="box" key={item.id}>
                                        <div className="box__top d-flex justify-content-between">
                                            <p className="name">{item.name}</p>
                                            <p className="time">{item.time}</p>
                                        </div>
                                        <div className="content">
                                            <p>{item.content}</p>
                                        </div>
                                    </div>
                                )
                            }) }
                        </div>
                    </Col>
                    <Col xs="3">
                        <div>
                            <DayPicker
                                month={new Date()}
                                modifiersStyles={modifiersStyles}
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home;