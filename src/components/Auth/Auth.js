import React, {Component} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Container, Row, Col } from 'reactstrap';
import Register from './Register';
import Login from './Login';
import classnames from 'classnames';
import firebase from "../../firebase";
import loginUser from '../../actions/loginUser';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

class Auth extends Component {

    state = {
        activeTab: '1',
        email: '',
        password: '',
        disabled: true,
        validMail: false,
        errors: [],
        success: null
    };

    validateEmail = email => {
        let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(String(email).toLowerCase());
    };

    handleRegister = event => {
        const {email, password, errors} = this.state;
        event.preventDefault();

        if(this.isFormEmpty(this.state)) {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => {
                    let message = 'Registration successful';
                    this.setState({
                        success: message
                    });
                    console.log(user)
                })
                .catch(err => {
                    this.setState({
                        errors: errors.concat(err.message)
                    });
                    console.log(err.message)
                })
        } else {
            return false
        }
    };

    isFormEmpty = ({password}) => {
        let errors = [];
        if(password.length > 4) {
            this.setState({
                errors: []
            });
            return true
        } else {
            let error = 'Password must contain at least 4 characters';
            this.setState({
                errors: errors.concat(error)
            });
            return false
        }
    };

    handleLogin = event => {
        const { email, password } = this.state;
        event.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(resp => {
                console.log(resp);
                this.props.loginUser(true);
                history.push('/');
            })
            .catch(err => {
                console.log(err.message);
                this.props.loginUser(false)
            })
    };

    handleChange = event => {
        const {email} = this.state;
        const validMail = this.validateEmail(email);
        console.log(validMail);
        this.setState({
            [event.target.name] : event.target.value
        });
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
            <div className="authentication-wrap">
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
                                            errors={this.state.errors}
                                            success={this.state.success}
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
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{}
};

export default connect(mapStateToProps, {loginUser})(Auth);