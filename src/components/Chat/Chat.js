import React, { Component } from 'react';
import UserForm from './UserForm';
import ChatScreen from './ChatScreen';

class Chat extends Component {
    state = {
        currentUsername: '',
        currentScreen: 'WhatIsYourUsernameScreen'
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
                    currentUsername: username,
                    currentScreen: 'ChatScreen'
                })
            })
            .catch(error => console.error('error', error))
    };

    render() {
        const {currentScreen, currentUsername} = this.state;
        if (currentScreen === 'WhatIsYourUsernameScreen') {
            return <UserForm onSubmit={this.onUsernameSubmitted} />
        }
        if (this.state.currentScreen === 'ChatScreen') {
            return <ChatScreen currentUsername={currentUsername} />
        }
    }
}

export default Chat;