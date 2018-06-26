import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Main from './layout/Main';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        )
    }
}

ReactDom.render(<App />, document.getElementById('main'));