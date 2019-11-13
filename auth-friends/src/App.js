import React from 'react';
import { Link } from 'react-router-dom';
import FriendsList from './components/FriendsList';
import './App.css';
import Login from './components/Login';
import AddFriendForm from './components/AddFriendForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2> 🥰 All my friends 🥰</h2>
      </header>
      <Login/>
      <AddFriendForm/>
    </div>
  );
}

export default App;
