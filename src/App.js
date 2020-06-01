import React, { Component }  from 'react';
import {  Router, Route, Switch } from 'react-router-dom';
import Login from './login/login';
import ForgotPassword from './forgot-password/forgot-password';
import ResetPassword from './reset-password/reset-password';
import { Provider} from "react-redux";
import store from "./store";
import './App.scss';
import Dashboard from './components/dashboard'
 import Layout from './layout/layout';
import ChangePassword from './change-password/change-password';
import Admin from './components/admin';
import Profile from './components/profile';
import {history} from './_helpers/history'

require('dotenv').config()


// const App = () => (
  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
          showMenu: false
      };
      this.stateChange = this.stateChange;
  }

  stateChange = (showMenu) => {
      this.setState({
          showMenu: showMenu
      });
  };
  render() {
    return (
  <Provider store={store}>
  <Router  history={history}>
    <div>
      <main>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/reset-password" component={ResetPassword} /> 
 
           <Route exact={true} path='/dashboard' render={() => (
              <div>
                  <Layout stateChange={this.stateChange} />
                  <div className={'pt67 pr-2 ' + (this.state.showMenu ? 'sidebaropen' : 'sidebarclosed')}>
                      <Dashboard history={history} showMenu={this.state.showMenu} />
                      
                  </div>
              </div>
          )} />   
        
          <Route exact={true} path='/change-password' render={() => (
              <div>
                  <Layout stateChange={this.stateChange} />
                  <div className={'pt67 pr-2 ' + (this.state.showMenu ? 'sidebaropen' : 'sidebarclosed')}>
                      <ChangePassword history={history} showMenu={this.state.showMenu} />
                  </div>
              </div>
          )} /> 
          <Route exact={true} path='/admin' render={() => (
              <div>
                  <Layout stateChange={this.stateChange} />
                  <div className={'pt67 pr-2 ' + (this.state.showMenu ? 'sidebaropen' : 'sidebarclosed')}>
                      <Admin showMenu={this.state.showMenu} />
                  </div>
              </div>
          )} />  
          
          <Route exact={true} path='/profile' render={() => (
              <div>
                  <Layout stateChange={this.stateChange} />
                  <div className={'pt67 pr-2 ' + (this.state.showMenu ? 'sidebaropen' : 'sidebarclosed')}>
                      <Profile history={history} showMenu={this.state.showMenu} />
                  </div>
              </div>
          )} />  
        </Switch>
      </main>
    </div>
  </Router>
  </Provider>
);
          }
        }

export default App;