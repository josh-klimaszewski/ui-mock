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
                        <Link to="/">Dashboard</Link>
                    </div>
                    <div>
                        <Link to="/invoices">Invoices</Link>
                    </div>
                    <div>
                        <Link to="/paybills">Pay Bills</Link>
                    </div>
                    <div>
                        <Link to="/accounting">Accounting</Link>
                    </div>
                    <div>
                        <Link to="/reports">Reports</Link>
                    </div>
                    <div>
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