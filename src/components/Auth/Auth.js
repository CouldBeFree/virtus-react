import React, {Component} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import Register from './Register';
import Login from './Login';
import classnames from 'classnames';
import firebase from "../../firebase";

class Auth extends Component {

    state = {
        activeTab: '1',
        email: '',
        password: ''
    };

    handleRegister = event => {
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

    handleLogin = event => {
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

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            Register
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            Login
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Register submit={this.handleRegister} getValue={this.handleChange}/>
                    </TabPane>
                    <TabPane tabId="2">
                        <Login submit={this.handleLogin} getValue={this.handleChange}/>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default Auth;