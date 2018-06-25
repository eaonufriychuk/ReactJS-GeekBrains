import './Menu.css';

import React, { Fragment } from 'react';

export default (props)=>{
    const { selector, items } = props;
        return (
            <Fragment>
                <ul className={ selector +"-list" }>
                    { items.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>) }
                </ul>
            </Fragment>
        );
}