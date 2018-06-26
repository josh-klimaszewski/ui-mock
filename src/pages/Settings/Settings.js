import React from 'react';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import './style.css';
const Settings = () => {
    return (
        <div>
            <Header />
            <div className="content">
                <Nav />
                [Settings]
            </div>
        </div>
    )
}
export default Settings;