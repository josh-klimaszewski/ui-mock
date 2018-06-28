import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotifications } from '../../actions';
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
        console.log(this.state);
        return (
            <div>[notifications]</div>
        );
    }
}

function mapStateToProps(state) {
    return { notifications: state.notifications.notifications }
}
export default connect(mapStateToProps, { getNotifications })(Notifications);