import React, {Component} from 'react';
import fireabase from '../../firebase';

class Login extends Component {
    state = {
        email: '',
        password: ''
    };

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="email"/>
                    <input type="password"/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}

export default Login