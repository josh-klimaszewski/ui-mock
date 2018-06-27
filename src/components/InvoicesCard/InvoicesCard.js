import React, { Component } from 'react';
import { Card, CardContent, Divider } from '@material-ui/core';
import './style.css';

class InvoicesCard extends Component {
    render() {
        return (
            <Card className="card">
                <CardContent>
                    Invoices
                    <Divider />
                </CardContent>
                
            </Card>
        )
    }
}

export default InvoicesCard;