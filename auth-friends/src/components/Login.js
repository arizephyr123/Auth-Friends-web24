import React from "react";
import useInput from "../hooks/useInput";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = props => {
  const [username, setUsername, handleUsername] = useInput("");
  const [pass, setPass, handlePass] = useInput("");

  const handleSubmit = e => {
    e.preventDefault();
    const creds = {
      username: username,
      password: pass
    };
    //console.log("Login handleSubmit", username, pass, creds);
    axiosWithAuth()
      .post("api/login", creds)
      .then(res => {
          //console.log(res.data);
        sessionStorage.setItem("token", res.data.payload);
        //   props.history.push("/");
      })
      .catch(err => {
        return (<h3>{err.message}</h3>);
      });
  };

  return (
    <div className="login form">
      <form>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          onChange={e => handleUsername(e.target.value)}
          value={username}
        ></input>
        <label>Password:</label>
        <input
          type="text"
          name="pass"
          onChange={e => handlePass(e.target.value)}
          value={pass}
        ></input>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Login;
