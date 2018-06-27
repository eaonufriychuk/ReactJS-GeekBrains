import React, { PureComponent, Fragment } from 'react';

export default class Article extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    render() {
        const { title } = this.props;
        const { isOpen } = this.state;
        return (
            <div className="card">
                <div className="card-header">
                    <h2>
                        {title}
                    </h2>
                </div>
                <div className="card-body">
                    {this.getArticle()}
                    <button onClick={this.toggleOpen} type="button"
                        className="btn btn-info">{isOpen ? 'Close' : 'Open'}</button>
                </div>
            </div>);
    }

    getArticle() {
        const { body } = this.props;
        const { isOpen } = this.state;
        return isOpen ? <Fragment><p>{body}</p></Fragment> :
            <Fragment><p>Открыть статью...</p></Fragment>;
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

}