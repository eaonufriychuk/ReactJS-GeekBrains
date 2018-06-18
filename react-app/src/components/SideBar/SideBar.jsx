import React, {Component} from 'react';
import './SideBar.css';

export default class SideBar extends Component {
    render() {
        const {items} = this.props;
        return (
            <div className="sidenav">
                <ul className="nav-menu">
                    {items.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)}
                </ul>
            </div>
        );
    }
}