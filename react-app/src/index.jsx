import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Main from './layout/Main';

class App extends Component {
    render() {
        return (
            <Main />
        )
    }
}

ReactDom.render(<App />, document.getElementById('main'));