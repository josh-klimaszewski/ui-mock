import React from 'react';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import './style.css';
const ConnectedApps = () => {
    return (
        <div>
            <Header />
            <div className="content">
                <Nav />
                [ConnectedApps]
            </div>
        </div>
    )
}
export default ConnectedApps;