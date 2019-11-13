import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import FriendsList from "./components/FriendsList";
import "./App.css";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

//Route component passes in 3 default props.match, history and location

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Link to="/protected">Protected Page</Link>
          <h2> 🥰 All my friends 🥰</h2>
        </header>
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
