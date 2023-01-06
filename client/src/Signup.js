import React,{useState} from 'react'

function Signup({user, setUser}){
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const [signedup, setSignedup] = useState(false)

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
                setSignedup(true);
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });

    
    }

    return (
        <div>
        <div>
        <form onSubmit={handleSubmit}>
            <p>Signup: </p>
            <label htmlFor="username" className="sign">Username:</label>
            <input 
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder = 'username'
                className="sign"/>
            <label htmlFor="password" className="sign">Password:</label>
            <input 
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder = 'password'
                className="sign"/>
            <label htmlFor="password_confirmation" className="sign">Password Confirmation:</label>
            <button type="submit">Signup</button>
        </form>
        </div>
        <div className="signuptext">
            {signedup ? <p>You are now signed up for our site and logged in</p> : null }
        </div>
        </div>
    );
}

export default Signup