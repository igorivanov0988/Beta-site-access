import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import LoginPage from "./containers/LoginPage";
import HomePage from "./containers/HomePage";

import { store } from './store';

import './App.css';

class App extends Component {
  render(){
  return (
      <Provider store={store}>
        <div className="app">
          <Router>
            <Switch>
              <Route path='/login' component={LoginPage} />
              <Route path='/home' component={HomePage} />

              <Route component={LoginPage} />
            </Switch>
          </Router>
        </div>
      </Provider>
  );
}
}

export default App;
