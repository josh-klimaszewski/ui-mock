import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

const Notification = ({ message, action }) => (
    <Card className="notification">
        <CardContent className="message">
            {message}
        </CardContent>
        <CardContent className="action">
            {action}
        </CardContent>
        <ExpandMore />
    </Card>
);
export default Notification;