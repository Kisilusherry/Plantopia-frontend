// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import ResetPassword from './components/ResetPassword';
import PlantDetails from './components/PlantDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route path="/plant/:id" component={PlantDetails} />
      </Switch>
    </Router>
  );
}

export default App;
