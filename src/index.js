import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
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
import './App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux-promise';
// import reducers from './reducers';

ReactDOM.render(
    <Router>
        <div className="app">
            <Header />
            <div className="content">
                <Nav />
                <Switch>
                    <Route path="/invoices" component={Invoices} />
                    <Route path="/paybills" component={PayBills} />
                    <Route path="/accounting" component={Accounting} />
                    <Route path="/reports" component={Reports} />
                    <Route path="/connectedapps" component={ConnectedApps} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/" component={Dashboard} />
                </Switch>
            </div>
        </div>
  </Router>
, document.getElementById('root'));
registerServiceWorker();
