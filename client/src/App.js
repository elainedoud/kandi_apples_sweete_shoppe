import React,{useState, useEffect} from 'react'
import Login from './Login'
import Signup from './Signup'
import './App.css';

function App (){

  const [user, setUser] = useState([])

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

  return (
      <div>
          <Signup user={user} setUser={setUser}/>
          <Login user={user} setUser={setUser}/>
      </div>
  )
}

export default App;
