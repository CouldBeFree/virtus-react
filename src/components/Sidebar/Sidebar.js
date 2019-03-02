import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Sidebar = () => (
    <div>
        <ul className="sidebar">
            <li className="sidebar-item">
                <NavLink exact to="/">Home</NavLink>
            </li>
            <li className="sidebar-item">
                <NavLink to="/projects">Projects</NavLink>
            </li>
            <li className="sidebar-item">
                <NavLink to="/statistics">Statistics</NavLink>
            </li>
            <li className="sidebar-item">
                <NavLink to="/trello">Trello</NavLink>
            </li>
        </ul>
    </div>
);

export default withRouter(Sidebar);