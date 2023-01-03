import React,{useState} from 'react'

function Login({user, setUser}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setError] = useState([])

    const handleLogin = (e) =>{
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password}),
        })
        .then((r) => r.json())
        .then( data => {
            if (data.id){
                setUser(data)
            } else if (data.errors){
                setError(errors)
            }
        })
    }

    const handleChangeUsername = e => setUsername(e.target.value)
    const handleChangePassword = e => setPassword(e.target.value)


    return (
        <div>
        <form onSubmit={handleLogin}>
            <p>Login:</p>
            <input 
            type="text"
            onChange = {handleChangeUsername}
            value = {username}
            placeholder = 'username' />
            <input 
            type="text" 
            onChange = {handleChangePassword}
            value = {password}
            placeholder = 'password' />
        <button type="submit">Login</button>
        </form>
        </div>
    );
}

export default Login