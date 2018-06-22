import React from 'react';
import Menu from '../Menu';
import Modal from '../Modal';

export default (props) => {
    const {selector, items, modalShow} = props;
    return (
        <div className={selector}>
            <Menu selector={selector} items={items}/>
            {modalShow ? <Modal/> : null}
        </div>
    );
}