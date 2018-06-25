import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import SideBar from 'components/SideBar';
import ModalWindow from "components/ModalWindow";

const menuItems = [
    {
        id: 1, link: '/', title: 'Home'
    },
    {
        id: 2, link: 'blog/', title: 'Blog'
    },
    {
        id: 3, link: 'comments/', title: 'Comments'
    },
    {
        id: 4, link: 'users/', title: 'Users'
    }
];
const sideBar = [
    {
        id: 5, link: '#', title: 'About'
    },
    {
        id: 6, link: '#', title: 'Archives'
    },
    {
        id: 7, link: '#', title: 'Elsewhere'
    }
];

const footer = [
    {
        id: 8, link: 'https://www.facebook.com/profile.php?id=100014087160478'
    },
    {
        id: 9, link: 'https://vk.com/id15189473'
    },
    {
        id: 10, link: 'https://github.com/eaonufriychuk'
    }
];

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: true
        };
    }

    onModalClose = () => {
        this.setState({showModal: false})
    };

    render() {
        const {showModal} = this.state;

        return (
            <div className="wrapper">
                <div className="layer"></div>
                {showModal && <ModalWindow onModalClose={this.onModalClose}/>}
                <div className="content">
                    <Header selector="menu" items={menuItems} modalShow="true"/>
                    <div className="body container">
                        <div className="row">
                            <SideBar items={sideBar}/>
                            { this.props.children }
                        </div>
                    </div>
                </div>
                <Footer items={footer}/>
            </div>
        );
    }
}