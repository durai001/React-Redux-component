import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router-dom";

import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { createBrowserHistory } from 'history';
import store from './store/store';
import './App.css';
import Layout from './layouts/index';

import UserProfile from "./views/UserProfile.js";
import UserDetails from './views/userDetails.js';
import Login from './views/login.js';


const history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: [],
      array: [1, 2, 3, 4, 5]
    }
  }

  render() {

    return (
      <Provider store={store}>
        <Router history={history} exact path="/">
          <main className="h-100">
            <Switch>

              <Route exact={true} path="/user-profile" render={() => (
                <>
                  <Layout page={"User Profile"}/>
                  <div className="main" >
                    <UserProfile />
                  </div>
                </>
              )}
              />

              <Route exact={true} path="/userDetails" render={() => (
                <>
                  <Layout page={"User Details"}/>
                  <div className="main" >
                    <UserDetails />
                  </div>
                </>
              )}
              />

              <Route exact={true} component={Login} />
            </Switch>
            <ToastContainer />
          </main>
        </Router>
      </Provider>
    );
  }
}

export default App;
