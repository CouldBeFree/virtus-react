import React, { Component } from 'react';
import Auth from '../components/Auth/Auth';
import {Router, Route, Switch} from 'react-router-dom';
import Home from '../components/Home/Home';
import Projects from '../components/Projects/Projects';
import Statistics from '../components/Statistics/Statistics';
import Trello from '../components/Trello/Trello';
import Chat from '../components/Chat/Chat';
import Sidebar from './Sidebar/Sidebar';
import { Row, Col } from 'reactstrap';
import createBrowserHistory from 'history/createBrowserHistory';
import PrivateRoute from '../components/PrivateRoute';
import { connect } from 'react-redux';
import './App.scss';
import { loginUser, setUser, clearUser } from "../actions/index";
import firebase from '../firebase';

const customHistory = createBrowserHistory();

class App extends Component {

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
        this.props.loginUser(false);
        customHistory.push('/auth');
        firebase
            .auth()
            .signOut()
            .then(() => console.log('Signed out'))
    };

    render() {
        const { auth } = this.props;
        return (
            <Router history={customHistory}>
                { auth ? (
                    <div className="wrap">
                        <div>
                            <div className="top-bar">
                                <button onClick={this.logoutUser}>Logout</button>
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
                                            <PrivateRoute exact path="/trello" component={Trello}/>
                                            <PrivateRoute exact path="/chat" component={Chat}/>

                                            {/*<Route exact path="/" component={Home}/>
                                            <Route exact path="/projects" component={Projects}/>
                                            <Route exact path="/statistics" component={Statistics}/>
                                            <Route exact path="/trello" component={Trello}/>
                                            <Route exact path="/chat" component={Chat}/>*/}
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
    return{
        auth: state.auth.isAuthenticated
    }
};

// export default App;
export default connect(mapStateToProps, {loginUser, setUser, clearUser})(App);
