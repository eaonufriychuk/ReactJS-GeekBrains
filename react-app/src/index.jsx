import React, {Component} from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from 'components/Menu';
import Footer from 'components/Footer';
import PostList from 'components/PostList';
import SideBar from 'components/SideBar';
import './index.css';

const menuItems = [
    {
        id: 1, link: '#', title: 'Home'
    },
    {
        id: 2, link: '#', title: 'About'
    },
    {
        id: 3, link: '#', title: 'Services'
    },
    {
        id: 4, link: '#', title: 'Contact us'
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


class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="content">
                    <Menu items={menuItems}/>
                    <div className="container-list">
                        <SideBar items={sideBar}/>
                        <PostList/>
                    </div>
                </div>
                <Footer items={footer}/>
            </div>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('main'));