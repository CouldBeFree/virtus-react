import React, { Component } from 'react';
import Auth from '../components/Auth/Auth';
import {Router, Route, Switch} from 'react-router-dom';
import Home from '../components/Home/Home';
import Projects from '../components/Projects/Projects';
import Statistics from '../components/Statistics/Statistics';
import Users from '../components/Users/Users';
import Chat from '../components/Chat/Chat';
import Sidebar from './Sidebar/Sidebar';
import { Row, Col } from 'reactstrap';
import createBrowserHistory from 'history/createBrowserHistory';
import PrivateRoute from '../components/PrivateRoute';
import { connect } from 'react-redux';
import './App.scss';
import { loginUser, setUser, clearUser } from "../actions/index";
import firebase from '../firebase';
import logo from '../static/logo.png';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const customHistory = createBrowserHistory();

class App extends Component {
    state = {
        dropdownOpen: false
    };

    componentDidMount () {
        const { loginUser, setUser, clearUser } = this.props;
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                console.log(user);
                customHistory.push('/');
                loginUser(true);
                setUser(user);
            } else {
                customHistory.push('/auth');
                console.log('user is not authenticated');
                clearUser();
            }
        })
    }

    logoutUser = () => {
        const { loginUser, clearUser } = this.props;
        loginUser(false);
        customHistory.push('/auth');
        clearUser();
        firebase
            .auth()
            .signOut()
            .then(() => console.log('Signed out'))
    };

    toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    };

    render() {
        const { auth } = this.props;
        return (
            <Router history={customHistory}>
                { auth ? (
                    <div className="wrap">
                        <div>
                            <div className="top-bar d-flex justify-content-between align-items-center">
                                <div className="logo">
                                    <img onClick={() => customHistory.push('/')} src={logo} alt="virtus"/>
                                </div>
                                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                    <DropdownToggle caret>
                                        {
                                            <div className="image-wrap">
                                                <img src={this.props.user.photoURL} alt="user"/>
                                            </div>
                                        }
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>{this.props.user.displayName}</DropdownItem>
                                        <DropdownItem onClick={this.logoutUser}>Logout</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                            <div className="wrapper">
                                <Row>
                                    <Col xs="1" className="sidebar-wrap">
                                        <Sidebar/>
                                    </Col>
                                    <Col xs="11" className="main">
                                        <Switch>
                                            <PrivateRoute exact path="/" component={Home}/>
                                            <PrivateRoute exact path="/projects" component={Projects}/>
                                            <PrivateRoute exact path="/statistics" component={Statistics}/>
                                            <PrivateRoute exact path="/chat" component={Chat}/>
                                            <PrivateRoute exact path="/users" component={Users}/>
                                        </Switch>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                ) :  <Route exact path="/auth" component={Auth}/>}
            </Router>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return{
        auth: state.auth.isAuthenticated,
        user: state.user.currentUser
    }
};

// export default App;
export default connect(mapStateToProps, {loginUser, setUser, clearUser})(App);
