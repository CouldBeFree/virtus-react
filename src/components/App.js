import React, { Component } from 'react';
import Register from '../components/Auth/Register';
import Login from '../components/Auth/Login';
import Auth from '../components/Auth/Auth';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>I am root component</h1>
                <Auth/>
                {/*<Register/>*/}
                {/*<Login/>*/}
            </div>
        );
    }
}

export default App;
