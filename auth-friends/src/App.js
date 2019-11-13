import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FriendsList from "./components/FriendsList";
import "./App.css";
import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute';

//Route component passes in 3 default props.match, history and location

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2> 🥰 All my friends 🥰</h2>
      </header>

      <Router>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
