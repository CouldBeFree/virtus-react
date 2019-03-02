import React, {Component} from 'react';

class Register extends Component {
    state = {
        email: '',
        password: ''
    };

    handleSubmit = event => {
        event.preventDefault();
    };

    handleChange = event => {
        this.setState({ [event.target.name] : event.target.value })
    };

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="email" onChange={this.handleChange} type="email"/>
                    <input name="password" onChange={this.handleChange} type="password"/>
                </form>
            </div>
        )
    }
}

export default Register;