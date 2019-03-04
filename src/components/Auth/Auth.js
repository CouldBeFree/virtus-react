import React, {Component} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Container, Row, Col } from 'reactstrap';
import Register from './Register';
import Login from './Login';
import classnames from 'classnames';
import firebase from "../../firebase";
import loginUser from '../../actions/loginUser';
import { connect } from 'react-redux';

class Auth extends Component {

    state = {
        activeTab: '1',
        email: '',
        password: '',
        disabled: true
    };

    validateEmail = email => {
        let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(String(email).toLowerCase());
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
                console.log(resp);
                this.props.loginUser(true);
            })
            .catch(err => {
                console.log(err.message);
                this.props.loginUser(false)
            })
    };

    handleChange = event => {
        this.setState({ [event.target.name] : event.target.value });
    };

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        const { disabled } = this.state;

        return (
            <Container>
                <Row>
                    <Col xs="3"></Col>
                    <Col xs="6">
                        <div className="center">
                            <Nav tabs className="nav-item">
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
                            <h1 className="auth-headline">Welcome back</h1>
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="1">
                                    <Register
                                        submit={this.handleRegister}
                                        getValue={this.handleChange}
                                        disabled={disabled}
                                    />
                                </TabPane>
                                <TabPane tabId="2">
                                    <Login
                                        submit={this.handleLogin}
                                        getValue={this.handleChange}
                                        disabled={disabled}
                                    />
                                </TabPane>
                            </TabContent>
                        </div>
                    </Col>
                    <Col xs="3"></Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return{}
};

export default connect(mapStateToProps, {loginUser})(Auth);