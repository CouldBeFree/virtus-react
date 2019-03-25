import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit-client'

class ChatScreen extends Component {
    state = {
        currentUser: {}
    };

    componentDidMount () {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator: 'v1:us1:fd5f6f02-4257-4f31-a9ef-7ccbcd1d5469',
            userId: this.props.currentUsername,
            tokenProvider: new Chatkit.TokenProvider({
                url: 'http://localhost:4000/authenticate',
            }),
        });

        chatManager
            .connect()
            .then(currentUser => {
                this.setState({ currentUser })
            })
            .catch(error => console.error('error', error))
    }

    render() {
        return (
            <div>
                <h1>Chat</h1>
            </div>
        )
    }
}

export default ChatScreen;