import React, { Component } from 'react';
import SidePanel from './SidePanel';
import ChatPanel from './ChatPanel';
import UserInfo from './UserInfo';
import { Row, Col } from 'reactstrap';

class Chat extends Component {
    render() {
        return (
            <div className="chat">
                <Row>
                    <Col xs="4">
                        <SidePanel/>
                    </Col>
                    <Col xs="6">
                        <ChatPanel/>
                    </Col>
                    <Col xs="2">
                        <UserInfo/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Chat;