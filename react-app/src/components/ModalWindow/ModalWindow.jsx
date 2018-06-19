import './ModalWindow.css';

import React, {Component} from "react";

export default class ModalWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {close: false};
    }

    modalClose = e => {
        if (
            (this.node && !this.node.contains(e.target)) ||
            e.target.id === "modalClose"
        ) {
            this.setState({close: true});
            setTimeout(() => {
                const layer = document.querySelector('.layer');

                this.props.onModalClose();
                document.body.style.overflowY = 'scroll';
                layer.parentNode.removeChild(layer);
            }, 500);

            document.removeEventListener("click", this.modalClose);
        }
    };

    componentDidMount() {
        document.addEventListener("click", this.modalClose);
    }

    render() {
        const {close} = this.state;

        return (
            <div
                ref={node => (this.node = node)}
                className={"modal-window" + (close ? " modal-hide" : "")}
            >
                <div className="button-group">
                <button className="btn btn-secondary" id="modalClose" onClick={this.modalClose}>
                    close
                </button>
                </div>
                <div className="text">
                <h1>Hello!</h1>
                </div>
            </div>
        );
    }
}