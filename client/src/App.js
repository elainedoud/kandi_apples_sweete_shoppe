import React,{useState, useEffect} from 'react'
import Login from './Login'
import Signup from './Signup'
import Candy from './Candy'
import Header from './Header'
import NavBar from './NavBar'
import {Route, Switch} from 'react-router-dom';
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
          <Header />
          <NavBar />
            <Switch>
              <Route path="/login">
                <Login user={user} setUser={setUser}/>
                <button onClick={handleLogout}>Logout</button>
              </Route>
              <Route path="/signup">
                <Signup user={user} setUser={setUser}/>
              </Route>
            </Switch>
          <Candy />
      </div>
  )
}

export default App