import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
 import loginComponent from "./components/loginComponent";

import './App.scss';

const history = createBrowserHistory();
const App: React.FC = () => {
  return (
    <Router history={history} >
      <div  className="App" >
        <main className="App-header">
          <Switch>
            <Route  path="/" component={loginComponent} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
