import React, {Component} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Container, Row, Col } from 'reactstrap';
import Register from './Register';
import Login from './Login';
import classnames from 'classnames';
import firebase from "../../firebase";
import { loginUser } from '../../actions/index';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';
import md5 from 'md5';

const history = createBrowserHistory();

class Auth extends Component {

    state = {
        activeTab: '1',
        email: '',
        password: '',
        name: '',
        disabled: true,
        validMail: false,
        errors: [],
        success: null,
        usersRef: firebase.database().ref('users')
    };

    validateEmail = email => {
        let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(String(email).toLowerCase());
    };

    handleRegister = event => {
        const {email, password, errors, name} = this.state;
        event.preventDefault();

        if(this.isFormEmpty(this.state)) {
            firebase
                .auth().createUserWithEmailAndPassword(email, password)
                .then(createdUser => {
                    console.log(createdUser);
                    createdUser.user.updateProfile({
                        displayName: name,
                        photoURL: `http://gravatar.com/avatar/${md5(createdUser.user.email)}?d=identicon`
                    })
                        .then(() => {
                            /*this.saveUser(createdUser).then(() => {
                                console.log('User saved')
                            })*/
                            console.log('User saved')
                        })
                        .catch(err => {
                            console.log(err);
                            /*this.setState({
                                errors: this.state.errors.concat(err)
                            })*/
                        });
                    let message = 'Registration successful';
                    this.setState({
                        success: message
                    });
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

    saveUser = createdUser => {
        return this.state.usersRef.child(createdUser.user.uid).set({
            name: createdUser.user.displayName,
            avatar: createdUser.user.photoURL
        });
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
        let errors = [];
        event.preventDefault();
        if(this.isFormEmpty(this.state)) {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(resp => {
                    console.log(resp);
                    this.props.loginUser(true);
                    history.push('/');
                })
                .catch(err => {
                    this.props.loginUser(false);
                    this.setState({
                        errors: errors.concat(err.message)
                    });
                })
        }
    };

    handleChange = event => {
        const {email} = this.state;
        const validMail = this.validateEmail(email);
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
                                            errors={this.state.errors}
                                            success={this.state.success}
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