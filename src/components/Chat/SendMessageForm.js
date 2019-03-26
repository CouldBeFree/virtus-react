import React, { Component } from 'react';

class SendMessageForm extends Component {
    state = {
        text: '',
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.text);
        this.setState({ text: '' })
    };

    onChange = e => {
        this.setState({ text: e.target.value });
        if (this.props.onChange) {
            this.props.onChange()
        }
    };

    render() {
        const {text} = this.state;
        return (
            <div className="message-container">
                <div>
                    <form onSubmit={this.onSubmit} className="d-flex">
                        <input
                            type="text"
                            placeholder="Type a message here then hit ENTER"
                            onChange={this.onChange}
                            value={text}
                            className="message-input"
                        />
                    </form>
                </div>
            </div>
        )
    }
}

export default SendMessageForm