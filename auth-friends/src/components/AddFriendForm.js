import React from "react";
import axios from "axios";
import useInput from "../hooks/useInput";

const AddFriendForm = () => {
  const [newName, setNewName, handleNewName] = useInput("");
  const [newAge, setNewAge, handleNewAge] = useInput("");
  const [newEmail, setNewEmail, handleNewEmail] = useInput("");

  const handleAdd = e => {
    e.preventDefault();
    const newFriend = {
      id: Date.now(),
      name: newName,
      age: newAge,
      email: newEmail
    };
    console.log(newFriend);
    axios
      .post("http://localhost:5000/api/friends", newFriend)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        return <h3>{err}</h3>;
      });
  };

  return (
    <div className="add-friend form">
      <h3>Add more friends!</h3>
      <form>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          onChange={e => handleNewName(e.target.value)}
          value={newName}
        ></input>
        <label>Age:</label>
        <input
          type="text"
          name="age"
          onChange={e => handleNewAge(e.target.value)}
          value={newAge}
        ></input>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          onChange={e =>  handleNewEmail(e.target.value)}
          value={newEmail}
        ></input>
        <button onClick={handleAdd}>Add</button>
      </form>
    </div>
  );
};

export default AddFriendForm;
