import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';

const ProgressBar = ({percent, value, info}) => (
    <div className="progress-item d-flex align-items-center">
        <div className="bar">
            <CircularProgressbar
                percentage={percent}
                text={`${percent}%`}
                styles={{
                    path: {stroke: `rgba(33, 149, 242, 1)`},
                    transition: 'stroke-dashoffset 0.5s ease 0s'
                }}
            />
        </div>
        <div className="text-white">
            <h3 className="progress-count">{value}</h3>
            <p className="progress-info">{info}</p>
        </div>
    </div>
);

export default ProgressBar;