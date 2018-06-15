import React, {Component} from 'react';
import {SocialIcon} from 'react-social-icons';
import '../css/Footer.css';

export default class Footer extends Component {
    render() {
        const {items} = this.props;
        return (
            <div className='footer'>
                <div className='container'>
                    <div className='rights'>
                        <p>&copy;2018 All Rights Reserved.</p>
                    </div>
                    <div className='icons'>
                        {items.map(item => {
                            return (
                                <div key={item.id} className='icon'>
                                    <SocialIcon url={item.link} style={{height: 35, width: 35}}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}