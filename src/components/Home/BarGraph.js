import React from 'react';
import {BarChart, Bar, XAxis, CartesianGrid, ResponsiveContainer} from 'recharts';

const BarGraph = ({handleChange, select, data}) => (
    <div className="sales-report">
        <div className="sales-report__top d-flex justify-content-between">
            <h3>Sales report</h3>
            <div className="select d-flex justify-content-between">
                <p>Show:</p>
                <select value={select} onChange={handleChange}>
                    <option value="year">Year</option>
                    <option value="month">Month</option>
                </select>
            </div>
        </div>
        <ResponsiveContainer>
            <BarChart
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <XAxis dataKey="name" />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="uv" fill="#505464" />
            </BarChart>
        </ResponsiveContainer>
    </div>
);

export default BarGraph;