import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import '../css/Login.css';

export default class ModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>Login</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Login</ModalHeader>
                    <ModalBody>
                        <form className="form">
                            <input type="text" className="form-control" placeholder="Email" required autoFocus/>
                            <input type="password" className="form-control" placeholder="Password" required/>
                            <div className="info">
                                <label className="checkbox">
                                    <input type="checkbox" value="remember-me"/>
                                    Remember me
                                </label>
                                <a href="#" className="need-help">Need help? </a>
                            </div>
                            <a href="#" className="new-account">Create an account </a>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Sign in</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
