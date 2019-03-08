import React, { Component } from 'react';
import {BarChart, Bar, XAxis, CartesianGrid} from 'recharts';
import { Container, Row, Col } from 'reactstrap';

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
        ]
    };
    render () {
        return (
            <div className="home-wrapper">
                <div className="home-wrapper__top d-flex justify-content-between">
                    <h3>Sales report</h3>
                    <div className="select">
                        <p>Show</p>
                        <select>
                            <option value="year">Year</option>
                            <option value="lime">Lime</option>
                            <option selected value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </div>
                </div>
                <div className="sales-report">
                    <BarChart
                        width={400}
                        height={200}
                        data={this.state.data}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <XAxis dataKey="name" />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="uv" fill="#505464" />
                    </BarChart>
                </div>
            </div>
        )
    }
}

export default Home;