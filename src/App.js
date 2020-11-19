import React from 'react';
import './App.css';
import Home from './pages/Home.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Referidos from './pages/Referidos';
import Signin from './pages/Signin';
import Login from './pages/Login';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Referidos' exact component={Referidos} />
          <Route path='/Signin' exact component={Signin} />
          <Route path='/Login' exact component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

