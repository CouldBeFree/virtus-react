import React from 'react';

const TopBar = ({projects, isOpen, toggle, company, select}) => (
    <div className="inner-bar d-flex justify-content-between">
        <div className="inner-bar__left">
            <span className="count">All projects ({projects})</span>
            <span className="workflow">Workflow</span>
        </div>
        <div className="inner-bar__right d-flex align-items-center justify-content-between">
            <span>Show projects: </span>
            <select onChange={select}>
                <option value="Microsoft">Microsoft</option>
                <option value="Google">Google</option>
                <option value="Symu.co">Symu</option>
                <option value="JCD.pl">JCD</option>
                <option value="Facebook">Facebook</option>
                <option value="Themeforest">Themeforest</option>
            </select>
        </div>
    </div>
);

export default TopBar;
