import React from 'react';

const TopBar = ({projects}) => (
    <div className="inner-bar d-flex justify-content-between">
        <div className="inner-bar__left">
            <span className="count">All projects ({projects})</span>
            <span className="workflow">Workflow</span>
        </div>
        <div className="inner-bar__right">

        </div>
    </div>
);

export default TopBar;
