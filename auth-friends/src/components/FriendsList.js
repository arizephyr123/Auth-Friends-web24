import React, { setState } from "react";

import AddFriendForm from "../components/AddFriendForm";
 import '../../server.js' as data

const FriendsList = () => {
  const [list, setList] = setState({});




  return (
      <>
      <AddFriendForm/>
      </>
  )
};

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
