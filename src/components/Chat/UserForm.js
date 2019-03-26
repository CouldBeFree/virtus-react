import React, { Component } from 'react';
import { connect } from 'react-redux';

class UsernameForm extends Component {
    state = {
        username: this.props.user.displayName,
        disabled: true
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.username)
    };

    onChange = (e) => {
        const { username } = this.state;
        let flag;
        if(username.length > 4) {
            flag = false
        }
        this.setState({
            username: e.target.value,
            disabled: flag
        })
    };

    isEmpty = () => {
        const { username } = this.state;
        let flag;
        if(username.length > 4) {
            flag = false
        }
        this.setState({
            disabled: flag
        })
    };

    componentDidMount(){
        this.isEmpty();
    }

    render() {
        const {disabled ,username} = this.state;
        return (
            <div className="chat-intro d-flex align-items-center">
                <div className="intro-form">
                    <h2>What is your username?</h2>
                    <form onSubmit={this.onSubmit} className="d-flex flex-column align-items-center">
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={username}
                            onChange={this.onChange}
                            className="form-control"
                        />
                        <input type="submit" disabled={disabled} value="Join chat" className="button"/>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        user: state.user.currentUser
    }
};

export default connect(mapStateToProps)(UsernameForm);