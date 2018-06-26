import './Menu.css';

import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    const { selector, items } = props;
    return (
        <Fragment>
            <ul className={selector + "-list"}>
                {items.map(item => <li key={item.id}><Link to={item.link}>{item.title}</Link></li>)}
            </ul>
        </Fragment>
    );
}