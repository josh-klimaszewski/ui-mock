import React from 'react';
import './style.css';
import InvoicesCard from '../../components/InvoicesCard';
import Notifications from '../../components/Notifications';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Progress } from 'reactstrap';
import { Divider } from '@material-ui/core';

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
                <div className="summaryCard">
                    <div className="totalCashWrapper">
                        <h6>Total Cash</h6>
                        <h5>$11,200</h5>
                    </div>
                    <Divider />
                    <Progress className="bar" multi>
                        <Progress bar color="info" value="85" />
                        <Progress bar color="danger" value="15" />
                    </Progress>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;