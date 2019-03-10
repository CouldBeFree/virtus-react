import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

export default class LineGraph extends PureComponent {
    state = {
        data: [
            {
                name: '2010', sales: 40000
            },
            {
                name: '2011', sales: 30000
            },
            {
                name: '2012', sales: 20000
            },
            {
                name: '2013', sales: 27080
            },
            {
                name: '2014', sales: 18900
            },
            {
                name: '2015', sales: 23900
            },
            {
                name: '2016', sales: 34090
            }
        ]
    };

    render() {
        return (
            <ResponsiveContainer>
                <LineChart
                    data={this.state.data}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sales" stroke="#2196f3" />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}