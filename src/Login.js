import React,{useEffect, useState} from 'react'

function Login({onLogin}) {
    const [username, setUsername] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username
            })
        })
        .then((r) => r.json())
        .then((user) => onLogin(user));
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}/>
        <button type="submit">Login</button>
        </form>
    );
}

export default Login