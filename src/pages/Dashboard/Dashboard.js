import React from 'react';
import './style.css';
import InvoicesCard from '../../components/InvoicesCard';
import Notifications from '../../components/Notifications';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="feed">
                <div className="cards">
                    <InvoicesCard />
                    <InvoicesCard />
                </div>
                <Notifications />
            </div>
            <div className="summary">
            </div>
        </div>
    )
}
export default Dashboard;