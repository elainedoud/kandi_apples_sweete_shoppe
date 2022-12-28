import React,{useState} from 'react'

function Signup({user, setUser}){
    const [errors, setError] = useState([])
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleLogin(e){
        e.preventDefault();
    }

    return (
        <div>
        <form onSubmit={handleLogin}>
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