import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInvoices } from '../../actions';
import { Card, CardContent, Divider, List } from '@material-ui/core';
import Summary from './Summary';
import InvoiceList from './InvoiceList';

import './style.css';

class InvoicesCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            invoiceTotal: 0,
            invoices: []
        };
    }
    
    getInvoiceTotal = () => {
        const invoices = this.props.invoices;
        return invoices.reduce((total, current) =>  total + current.fields.amount, 0)
    }
    // getINvoiceTotalTwo = () => {
    //     let total = 0;
    //     this.props.invoices.forEach(invoice => {
    //         total += invoice.fields.amount;
    //     })
    //     return total;
    // }
    componentDidMount() {
        this.props.getInvoices(); 
    }
    render() {
        const invoiceTotal = this.getInvoiceTotal();
        
        // console.log(this.props)
        return (
            <Card className="card">
                <CardContent className="card-header">
                    Invoices
                </CardContent>
                <List>
                    <Summary 
                        className="summary"
                        primary="Coming Due"
                        amount={invoiceTotal}
                        renderExpanded={() => <InvoiceList invoices={this.props.invoices} />}
                    />
                    <Divider />
                    <Summary 
                        className="summary"
                        primary="Past Due"
                        amount={5560}
                        renderExpanded={() => <InvoiceList invoices={this.props.invoices} />}
                    />
                    <Divider />
                </List>
            </Card>
        )
    }
}

function mapStateToProps(state) {
    
    return { invoices: state.invoices.invoices }
}
export default connect(mapStateToProps, { getInvoices })(InvoicesCard);