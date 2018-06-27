import React, { Component, Fragment } from 'react';
import { ListItem, ListItemText, Collapse } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

class Summary extends Component {
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
        const { primary, amount, renderExpanded } = this.props;
        return(
            <Fragment>
                <ListItem onClick={this.handleToggle}>
                    <ListItemText 
                        primary={primary}
                    />
                    ${amount}
                    {this.state.open ? <ExpandLess /> : <ExpandMore />}
                    <Collapse in={this.state.open} timeout="auto" unmountOnExit={true}>
                        {renderExpanded && renderExpanded()}
                    </Collapse>
                </ListItem>
            </Fragment>
        )
    }
}
export default Summary;
