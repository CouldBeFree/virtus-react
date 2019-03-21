import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const TopBar = ({projects, isOpen, toggle, company}) => (
    <div className="inner-bar d-flex justify-content-between">
        <div className="inner-bar__left">
            <span className="count">All projects ({projects})</span>
            <span className="workflow">Workflow</span>
        </div>
        <div className="inner-bar__right d-flex align-items-center justify-content-between">
            <span>Show projects: </span>
            <Dropdown isOpen={isOpen} toggle={toggle}>
                <DropdownToggle color="light" className="dropdown" caret>
                    All
                </DropdownToggle>
                <DropdownMenu>
                    {company.map((item) => {
                        return (
                            <DropdownItem>{item.company}</DropdownItem>
                        )
                    })}
                </DropdownMenu>
            </Dropdown>
        </div>
    </div>
);

export default TopBar;
