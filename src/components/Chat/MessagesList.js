import React, { Component } from 'react'

class MessagesList extends Component {
    render() {
        const {messages} = this.props;
        return (
            <div className="list-container">
                <ul className="list">
                    {messages.map((message, index) => (
                        <li key={index} className="list-item">
                            <div>
                                <span className="user">{message.senderId}</span>{' '}
                            </div>
                            <p className="message">{message.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default MessagesList