import React from "react";

import AddFriendForm from "../components/AddFriendForm";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
  constructor() {
    super();
    this.state = {
      friendsList: {}
    };
  };

getFriends(){
axiosWithAuth()
.get('/api/friends')
.then(res => {
    console.log(res.data);
    //this.setState({res.data})
})
.catch(err => {
    console.log(err);
})
};

logOut(){
    sessionStorage.clear();
    this.props.history.push('/');
}

  render() {
    return (
      <>
        <AddFriendForm />
        <button onClick={this.logOut}>Log Out</button>
      </>
    );
  }
}

export default FriendsList;

/*
{list.map(friend => {
      <div>
        <h4>{friend.name}</h4>
        <h5>{friend.age}</h5>
        <h5>{friend.email}</h5>
      </div>
})
}

*/
