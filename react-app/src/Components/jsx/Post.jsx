import React, {Component} from 'react';

export default class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    render() {
        const {title} = this.props;
        const {isOpen} = this.state;
        return (
            <div className='post'>
                <div className='post-header'>
                    <h2>
                        {title}
                    </h2>
                </div>
                {this.getArticle()}
                <button onClick={this.toggleOpen} type='button'
                        className='btn'>{isOpen ? 'Close' : 'Open'}</button>

            </div>);
    }

    getArticle() {
        const {bodyShort, body} = this.props;
        const {isOpen} = this.state;
        return isOpen ? <div className='post-body'><p>{body}</p></div> :
            <div className='post-body'><p>{bodyShort}</p></div>;
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

}