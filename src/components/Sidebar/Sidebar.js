import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Sidebar = () => (
    <div>
        <ul className="sidebar">
            <li className="sidebar-item">
                <NavLink exact to="/"><i className="fas fa-home"></i></NavLink>
            </li>
            <li className="sidebar-item">
                <NavLink to="/projects"><i className="fas fa-bars"></i></NavLink>
            </li>
            <li className="sidebar-item">
                <NavLink to="/statistics"><i className="fas fa-chart-line"></i></NavLink>
            </li>
            <li className="sidebar-item">
                <NavLink to="/trello"><i className="fas fa-envelope"></i></NavLink>
            </li>
            <li className="sidebar-item">
                <NavLink to="/chat"><i className="fas fa-comments"></i></NavLink>
            </li>
        </ul>
    </div>
);

export default withRouter(Sidebar);