import React, { Component } from 'react';
import { Card, CardContent, Collapse } from '@material-ui/core';
import { ExpandMore, ExpandLess } from '@material-ui/icons';

class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    handleToggle = () => {
        this.setState(({ open }) => ({
            open: !open
        }));
    };
    render() {
        const { message, action, renderExpanded } = this.props;
        return (
            <Card className="notification" onClick={this.handleToggle}>
                <div className="main">
                <CardContent className="message">
                    {message}
                </CardContent>
                <CardContent className="action">
                    {action}
                </CardContent>
                {this.state.open ? <ExpandLess /> : <ExpandMore />}
                </div>
                <Collapse in={this.state.open} timeout='auto' unmountOnExit={true}>
                    {renderExpanded && renderExpanded()}
                </Collapse>
            </Card>
        )
    }
}
    
export default Notification;