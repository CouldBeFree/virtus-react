import React, { Component } from 'react';
import Auth from '../components/Auth/Auth';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="app">
                <h1>I am root component</h1>
                <Auth/>
            </div>
        );
    }
}

export default App;
