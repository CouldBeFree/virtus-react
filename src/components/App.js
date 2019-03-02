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
import loginUser from "../actions/loginUser";

const customHistory = createBrowserHistory();

class App extends Component {

    render() {
        return (
            <Router history={customHistory}>
                <div>
                    { this.props.auth ? (
                        <div>
                            <div className="top-bar">
                                <button onClick={() => this.props.loginUser(false)}>Logout</button>
                            </div>
                            <div className="wrapper">
                                <Row>
                                    <Col xs="2">
                                        <Sidebar/>
                                    </Col>
                                    <Col xs="10">
                                        <Switch>
                                            <PrivateRoute exact path="/" component={Home}/>
                                            <PrivateRoute exact path="/projects" component={Projects}/>
                                            <PrivateRoute exact path="/statistics" component={Statistics}/>
                                            <PrivateRoute exact path="/trello" component={Trello}/>
                                            <PrivateRoute exact path="/chat" component={Chat}/>
                                        </Switch>
                                    </Col>
                                </Row>

                            </div>
                        </div>
                    ) : <Route exact path="/auth" component={Auth}/>
                    }

                    {/*<button onClick={() => this.props.loginUser(false)}>Logout</button>*/}
                    {/*{console.log(this.props.auth)}*/}
                </div>
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
export default connect(mapStateToProps, {loginUser})(App);
