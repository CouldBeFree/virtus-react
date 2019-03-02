import React, { Component } from 'react';
import Register from '../components/Auth/Register';
import Login from '../components/Auth/Login';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>I am root component</h1>
                <Register/>
                <Login/>
            </div>
        );
    }
}

export default App;
