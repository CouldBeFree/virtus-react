import React,{Component} from 'react';
import firebase from "../../firebase";

class MessageForm extends Component{
    state = {
        storageRef: firebase.storage().ref(),
        typingRef: firebase.database().ref("typing"),
        uploadTask: null,
        message: "",
        channel: this.props.currentChannel,
        user: this.props.currentUser,
        loading: false,
        errors: []
    };

    handleSubmit = (event) => {

    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleKeyDown = event => {
        if (event.ctrlKey && event.keyCode === 13) {
            this.sendMessage();
        }

        const { message, typingRef, user } = this.state;

        if (message) {
            typingRef
                .child(user.uid)
                .set(user.displayName);
        } else {
            typingRef
                .child(user.uid)
                .remove();
        }
    };

    render() {
        const { message } = this.state;
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        name="message"
                        onKeyDown={this.handleKeyDown}
                        // value={message}
                    />
                </form>
            </div>
        )
    }
}

export default MessageForm;