import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotifications } from '../../actions';
import Notification from './Notification';
import './style.css';

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: []
        }
    }
    componentDidMount() {
        this.props.getNotifications();
    }
    render() {
        
        const notifications = this.props.notifications;
        console.log(notifications);
        return (
            <div className="notifications">
            {notifications.map(notification => (
                <Notification 
                key={notification.fields.message}
                message={notification.fields.message} 
                action={notification.fields.action} />
            ))}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { notifications: state.notifications.notifications }
}
export default connect(mapStateToProps, { getNotifications })(Notifications);