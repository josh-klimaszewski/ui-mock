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
                    <div>Pay Bills</div>
                    <div>Accounting</div>
                    <div>Reports</div>
                    <div>Connected Apps</div>
                </div>
                <div className="settings">Settings</div>
            </div>
        )
    }
}
export default Nav;