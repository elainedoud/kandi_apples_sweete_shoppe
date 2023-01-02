import React,{useState, useEffect} from 'react'
import Login from './Login'
import Signup from './Signup'
import Candy from './Candy'
import './App.css';

function App (){

  const [user, setUser] = useState({})

useEffect(() => {
  fetch("/me")
  .then (res =>{
    if (res.ok) {
      res.json()
      .then (user => {
        setUser (user)
      })
    } else {
    }
  })
  }, [])

  const handleLogout = () => {
    setUser({})
    fetch('/logout', {
      method: 'DELETE'
    })
  }

  return (
      <div>
          <Login user={user} setUser={setUser}/>
          <Signup user={user} setUser={setUser}/>
          <button onClick={handleLogout}>Logout</button>
          <Candy />
      </div>
  )
}

export default App