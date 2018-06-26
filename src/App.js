import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        [nav]
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" component={Dashboard} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
