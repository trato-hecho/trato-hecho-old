import React from 'react';
import './App.css';
import Home from './pages/Home.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Referidos from './pages/Referidos';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Referidos' exact component={Referidos} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

