import React from 'react';
import './style.css';
import { Divider, List } from '@material-ui/core';
import InvoicesCard from '../../components/InvoicesCard';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="feed">
                <div className="cards">
                    <InvoicesCard>
                        <List>
                        </List>
                    </InvoicesCard>
                </div>
            </div>
            <div className="summary">
            </div>
        </div>
    )
}
export default Dashboard;