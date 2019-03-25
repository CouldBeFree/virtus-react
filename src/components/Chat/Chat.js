import React, { Component } from 'react';
import SidePanel from './SidePanel';
import ChatPanel from './ChatPanel';
import UserInfo from './UserInfo';
import UserForm from './UserForm';
import ChatScreen from './ChatScreen';
import { Row, Col } from 'reactstrap';

class Chat extends Component {
    state = {
        currentUsername: '',
    };

    onUsernameSubmitted = (username) => {
        fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username }),
        })
            .then(response => {
                this.setState({
                    currentUsername: username
                })
            })
            .catch(error => console.error('error', error))
    };

    render() {
        return (
            <div className="chat">
                <Row>
                    <Col xs="4">
                        <UserForm onSubmit={this.onUsernameSubmitted} />
                    </Col>
                    <Col xs="8">
                        <ChatScreen />
                    </Col>
                    {/*<Col xs="2">

                    </Col>*/}
                </Row>
            </div>
        )
    }
}

export default Chat;