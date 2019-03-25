import React, { Component } from 'react';
import MessageForm from './MessageForm';
import firebase from '../../firebase';

class ChatPanel extends Component {
    state = {
        privateMessagesRef: firebase.database().ref("privateMessages"),
        messages: []
    };

    render() {
        return (
            <div>
                <MessageForm />
            </div>
        )
    }
}

export default ChatPanel;