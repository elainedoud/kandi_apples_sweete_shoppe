import React,{useState, useEffect} from 'react'
import Login from './Login'
import Signup from './Signup'
import Candy from './Candy'
import Header from './Header'
import NavBar from './NavBar'
import Candyform from './Candyform'
import {Route, Switch} from 'react-router-dom'
import './App.css';

function App ({makeNewCandy}){

  const [user, setUser] = useState({})
  const [candies, setCandies] = useState([])

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

  function makeNewCandy(newCandy){
    const arraryNewCandies = [...candies, newCandy]
    setCandies(arraryNewCandies)
  }

  return (
      <div>
          <Header />
          <NavBar />
          <Switch>
            <Route path="/home">
              <Candy />
              </Route>
              <Route path="/login">
                <Login user={user} setUser={setUser}/>
                <button onClick={handleLogout}>Logout</button>
              </Route>
              <Route path="/signup">
                <Signup user={user} setUser={setUser}/>
              </Route>
              <Route path="/candyform">
                <Candyform makeNewCandy={makeNewCandy}/>
              </Route>
            </Switch>
      </div>
  )
}

export default App