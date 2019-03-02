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
import store from '../store';
import { Provider } from 'react-redux';
import './App.scss';

const customHistory = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={customHistory}>
                    <div>
                        <div className="top-bar">

                        </div>
                        <div className="wrapper">
                            <Row>
                                <Col xs="3">
                                    <Sidebar/>
                                </Col>
                                <Col xs="9">
                                    <Switch>
                                        <Route exact path="/" component={Home}/>
                                        <Route exact path="/auth" component={Auth}/>
                                        <Route exact path="/projects" component={Projects}/>
                                        <Route exact path="/statistics" component={Statistics}/>
                                        <Route exact path="/trello" component={Trello}/>
                                        <Route exact path="/chat" component={Chat}/>
                                    </Switch>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
