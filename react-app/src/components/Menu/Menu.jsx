import React, {Component} from 'react';
import Modal from '../Modal';
import './Menu.css';

export default class Menu extends Component {
    render() {
        const {items} = this.props;
        return (
            <div className="menu">
                <ul className="menu-list">
                    {items.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)}
                </ul>
                <Modal/>
            </div>
        );
    }
}