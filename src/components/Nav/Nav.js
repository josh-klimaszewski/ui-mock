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
                        <i className='material-icons'>dashboard</i>
                        <Link to="/">Dashboard</Link>
                    </div>
                    <div>
                        <i className='material-icons'>receipt</i>
                        <Link to="/invoices">Invoices</Link>
                    </div>
                    <div>
                        <i className='material-icons'>credit_card</i>
                        <Link to="/paybills">Pay Bills</Link>
                    </div>
                    <div>
                        <i className='material-icons'>assessment</i>
                        <Link to="/accounting">Accounting</Link>
                    </div>
                    <div>
                        <i className='material-icons'>subject</i>
                        <Link to="/reports">Reports</Link>
                    </div>
                    <div>
                        <i className='material-icons'>device_hub</i>
                        <Link to="/connectedapps">Connected Apps</Link>
                    </div>
                </div>
                <div className="settings">
                    <div>
                        <Link to="/settings">Settings</Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default Nav;