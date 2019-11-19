import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import loginComponent from "./components/loginComponent";
import HomeComponent from "./components/homeComponent";
import LayoutComponent from "./layout/layoutComponent";
import sidemenuComponent from "./components/signUpComponent";

import './App.scss';

const history = createBrowserHistory();
const App: React.FC = () => {
  return (
    <Router history={history} >
      <div className="App" >
        <main className="App-header">
          <Switch>
            <Route exact path="/" component={loginComponent} />
            <Route exact path="/sign-up" component={sidemenuComponent} />
            
            <Route className=""
                  exact 
                  path="/home"
                  render={() => (
                    <>
                      <LayoutComponent  />
                      <div className="component">
                        <HomeComponent />
                      </div>
                    </>
                  )}
                />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
