import React from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './registration';
import Login from './login';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (<Router>
    <div className="App">
    
      <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
