import React,{useState} from 'react'

function Signup({user, setUser}){
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    function handleSubmit(e){
        e.preventDefault();
        fetch ("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <p>Signup: </p>
            <label htmlFor="username">Username:</label>
            <input 
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder = 'username'/>
            <label htmlFor="password">Password:</label>
            <input 
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder = 'password'/>
            <label htmlFor="password_confirmation">Password Confirmation:</label>
            <button type="submit">Signup</button>
        </form>
        </div>
    );
}

export default Signup