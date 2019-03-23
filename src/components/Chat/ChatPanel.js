import React, { Component } from 'react';
import firebase from '../../firebase'

class ChatPanel extends Component {
    state = {
        privateMessagesRef: firebase.database().ref("privateMessages"),
        messages: []
    };

    render() {
        return (
            <div>
                <h1>I am chat panel</h1>
            </div>
        )
    }
}

export default ChatPanel;