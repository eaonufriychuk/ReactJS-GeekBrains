import './SideBar.css';

import React, {Component} from 'react';
import Menu from '../Menu/Menu';
import {InputGroup, InputGroupAddon, Button, Input} from 'reactstrap';

export default class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false
        }
    }

    render() {
        const {items} = this.props;
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
                        <Menu selector="submenu-nav" items={items} modalShow={this.state.modalShow}/>
                    </div>
                </div>
            </div>
        );
    }
}