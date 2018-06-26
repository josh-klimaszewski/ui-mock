import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Invoices from './pages/Invoices';
import PayBills from './pages/PayBills';
import Accounting from './pages/Accounting';
import Reports from './pages/Reports';
import ConnectedApps from './pages/ConnectedApps';
import Settings from './pages/Settings';
import Header from './components/Header';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <div className="content">
              <Nav />
              <Switch>
                <Route path="/" component={Dashboard} />
                <Route path="/invoices" component={Invoices} />
                <Route path="/paybills" component={PayBills} />
                <Route path="/accounting" component={Accounting} />
                <Route path="/reports" component={Reports} />
                <Route path="/connectedapps" component={ConnectedApps} />
                <Route path="/settings" component={Settings} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
