import React, { Component } from 'react';
import './style.css';

class Header extends Component {
    render() {
        return (
            <div className='dashHeader'>
                <div className='dashHeaderCompany'>
                    [autobooks customer]
                </div>
                <div className='dashHeaderActions'>
                    <i className="material-icons">add_circle</i>
                    <span>QUICK ACTIONS</span>
                </div>
                <div className='dashHeaderSearch'>
                    <i className="material-icons">search</i>
                </div>
            </div>
        )
    };
}
export default Header;