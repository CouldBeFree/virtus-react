import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';

const ProgressBar = ({select}) => (
    <div className="progress-block d-flex align-items-center justify-content-between">
        <div className="bar-wrap d-flex">
            <div className="progress-item d-flex align-items-center">
                <div className="bar">
                    <CircularProgressbar
                        percentage={75}
                        text={`${75}%`}
                        styles={{
                            path: {stroke: `rgba(33, 149, 242, ${2800 / 100})`},
                        }}
                    />
                </div>
                <div className="text-white">
                    <h3 className="progress-count">2800</h3>
                    <p className="progress-info">Views</p>
                </div>
            </div>
            <div className="progress-item d-flex align-items-center">
                <div className="bar">
                    <CircularProgressbar
                        percentage={35}
                        text={`${35}%`}
                        styles={{
                            path: {stroke: `rgba(33, 149, 242, ${1800 / 100})`},
                        }}
                    />
                </div>
                <div className="text-white">
                    <h3 className="progress-count">800</h3>
                    <p className="progress-info">Visitors</p>
                </div>
            </div>
            <div className="progress-item d-flex align-items-center">
                <div className="bar">
                    <CircularProgressbar
                        percentage={62}
                        text={`${62}%`}
                        styles={{
                            path: {stroke: `rgba(33, 149, 242, ${1800 / 100})`},
                        }}
                    />
                </div>
                <div className="text-white">
                    <h3 className="progress-count">3800</h3>
                    <p className="progress-info">Impressions</p>
                </div>
            </div>
        </div>
        <div className="select-wrap">
            <span>Show: </span>
            <select onChange={select}>
                <option value="week">Week</option>
                <option value="month">Month</option>
                <option value="year">Year</option>
            </select>
        </div>
    </div>
);

export default ProgressBar;