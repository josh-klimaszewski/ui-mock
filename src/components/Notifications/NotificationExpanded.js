import React from 'react';
import { Divider } from '@material-ui/core';

const NotificationExpanded = (props) => (
    <div>
        <Divider />
        {props.notification.fields.message}
    </div>
)
export default NotificationExpanded;