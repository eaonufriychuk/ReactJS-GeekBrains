import './Menu.css';

import React, {Component} from 'react';
import Modal from '../Modal';

export default class Menu extends Component {
    render() {
        const {selector, items, modalShow} = this.props;
        return (
            <div className={selector}>
                <ul className={ selector +"-list"}>
                    {items.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)}
                </ul>
                {modalShow? <Modal/>: null}
            </div>
        );
    }
}