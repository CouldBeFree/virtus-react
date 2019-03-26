import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit-client';
import MessagesList from './MessagesList';
import SendMessageForm from './SendMessageForm';
import TypingIndicator from './TypingIndicator';
import  WhoIsOnlineList  from './WhoIsOnlineList';

class ChatScreen extends Component {
    state = {
        currentUser: {},
        currentRoom: {},
        messages: [],
        usersWhoAreTyping: []
    };

    sendTypingEvent = () => {
        const { currentUser, currentRoom } = this.state;
        currentUser
            .isTypingIn({ roomId: currentRoom.id })
            .catch(error => console.error('error', error))
    };

    sendMessage = (text) => {
        const { currentRoom } = this.state;
        this.state.currentUser.sendMessage({
            text,
            roomId: currentRoom.id,
        })
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
                this.setState({ currentUser });
                return currentUser.subscribeToRoom({
                    roomId: "19996735",
                    messageLimit: 100,
                    hooks: {
                        onMessage: message => {
                            this.setState({
                                messages: [...this.state.messages, message],
                            })
                        },
                        onUserStartedTyping: user => {
                            this.setState({
                                usersWhoAreTyping: [...this.state.usersWhoAreTyping, user.name],
                            })
                        },
                        onUserStoppedTyping: user => {
                            this.setState({
                                usersWhoAreTyping: this.state.usersWhoAreTyping.filter(
                                    username => username !== user.name
                                ),
                            })
                        },
                        onPresenceChange: () => this.forceUpdate(),
                    },
                })
            })
            .then(currentRoom => {
                this.setState({ currentRoom })
            })
            .catch(error => console.error('error', error))
    }

    render() {
        return (
            <div className="screen-container d-flex flex-column">
                <div className="chat-container d-flex">
                    <aside className="user-online">
                        <WhoIsOnlineList
                            currentUser={this.state.currentUser}
                            users={this.state.currentRoom.users}
                        />
                    </aside>
                    <section className="chat-list d-flex flex-column">
                        <MessagesList
                            messages={this.state.messages}
                        />
                        <TypingIndicator usersWhoAreTyping={this.state.usersWhoAreTyping} />
                        <SendMessageForm
                            onSubmit={this.sendMessage}
                            onChange={this.sendTypingEvent}
                        />
                    </section>
                </div>
            </div>
        )
    }
}

export default ChatScreen;