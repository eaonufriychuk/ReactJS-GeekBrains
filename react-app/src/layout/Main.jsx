import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { PureComponent, Fragment } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import SideBar from 'components/SideBar';
import ModalWindow from 'components/ModalWindow';

import { menuItems, sideBar, footer } from 'constants/constants';

import routes from '../routes';

export default class Main extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            showModal: true
        };
    }

    onModalClose = () => {
        this.setState({ showModal: false })
    };

    render() {
        const { showModal } = this.state;

        return (
            <div className="wrapper">
                <div className="layer"></div>
                {showModal && <ModalWindow onModalClose={this.onModalClose} />}
                <div className="content">
                    <BrowserRouter>
                        <Fragment>
                            <Header selector="menu" items={menuItems} modalShow="true" />
                            <div className="body container">
                                <div className="row">
                                    <SideBar items={sideBar} />
                                    <Provider store={store}>
                                        <Switch>
                                            {routes.map(route => <Route key={route.id} {...route} />)}
                                        </Switch>
                                    </Provider>
                                </div>
                            </div>
                        </Fragment>
                    </BrowserRouter>
                </div>
                <Footer items={footer} />
            </div>
        );
    }
}