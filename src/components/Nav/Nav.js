import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Nav extends Component {
    constructor() {
        super();
        this.state = {

        };
    }
    render() {
        return (
            <div className="nav-bar">
                <div className="links">
                    <div>
                        <i className='material-icons md-dark'>dashboard</i>
                        <Link to="/" className='md-dark'>Dashboard</Link>
                    </div>
                    <div>
                        <i className='material-icons md-dark md-inactive'>receipt</i>
                        <Link to="/invoices" className='md-dark md-inactive'>Invoices</Link>
                    </div>
                    <div>
                        <i className='material-icons md-dark md-inactive'>credit_card</i>
                        <Link to="/paybills" className='md-dark md-inactive'>Pay Bills</Link>
                    </div>
                    <div>
                        <i className='material-icons md-dark md-inactive'>assessment</i>
                        <Link to="/accounting" className='md-dark md-inactive'>Accounting</Link>
                    </div>
                    <div>
                        <i className='material-icons md-dark md-inactive'>subject</i>
                        <Link to="/reports" className='md-dark md-inactive'>Reports</Link>
                    </div>
                    <div>
                        <i className='material-icons md-dark md-inactive'>device_hub</i>
                        <Link to="/connectedapps" className='md-dark md-inactive'>Connected Apps</Link>
                    </div>
                </div>
                <div className="settings">
                    <i className='material-icons md-dark md-inactive'>settings</i>
                    <Link to="/settings" className='md-dark md-inactive'>Settings</Link>
                </div>
            </div>
        )
    }
}
export default Nav;