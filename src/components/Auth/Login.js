import React, {Component} from 'react';
import firebase from '../../firebase';

class Login extends Component {
    state = {
        email: '',
        password: ''
    };

    handleSubmit = event => {
        const { email, password } = this.state;
        event.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(resp => {
                console.log(resp)
            })
            .catch(err => {
                console.log(err.message)
            })
    };

    handleChange = event => {
        this.setState({ [event.target.name] : event.target.value })
    };

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="email" type="email" onChange={this.handleChange}/>
                    <input name="password" type="password" onChange={this.handleChange}/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}

export default Login