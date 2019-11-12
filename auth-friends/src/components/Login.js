import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const Login = props => {
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");

    const handleUsername = e => {
setUsername(e.target.value);
    };

    const handlePass = e => {
        
        setPass(e.target.value);
            };

    const handleSubmit = e => {
e.preventDefault();
console.log("Login handleSubmit", username, pass);
const creds = {
    username: username,
    password: pass
};
axiosWithAuth.post('/api/login', creds)
.then(res => {
    sessionStorage.setItem('token', res.data.token);
    props.history.push('/');
})


    };

    return (<div>
        <form>
        <label>Username:</label>
            <input
            type='text'
            name='username'
            onChange={handleUsername}
            value={username}
            >
            </input>
            <label>Password:</label>
            <input
            type='text'
            name='pass'
            onChange={handlePass}
            value={pass}>
            </input>
            <button onClick={handleSubmit}>Submit
            </button>
        </form>
    </div>)

    };

export default Login;