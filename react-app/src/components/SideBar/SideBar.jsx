import './SideBar.css';

import React from 'react';
import Menu from '../Menu/Menu';
import {InputGroup, InputGroupAddon, Button, Input} from 'reactstrap';

export default (props) => {
    const {items} = props;

    return (
        <div className="col-3 side-bar">
            <div className="card">
                <div className="card-header">
                    <h4>Search Posts</h4>
                </div>
                <div className="card-body">
                    <InputGroup>
                        <Input placeholder="Search for..."/>
                        <InputGroupAddon addonType="append">
                            <Button color="secondary">Go!</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <h4>Sidebar</h4>
                </div>
                <div className="card-body">
                    <Menu selector="submenu-nav" items={items}/>
                </div>
            </div>
        </div>
    );
}