import React, {Component} from 'react';
import firebase from '../../firebase';

class Register extends Component {
    state = {
        email: '',
        password: ''
    };

    handleSubmit = event => {
        const {email, password} = this.state;
        event.preventDefault();

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
                console.log(user)
            })
            .catch(err => {
                console.log(err)
            })
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
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}

export default Register;