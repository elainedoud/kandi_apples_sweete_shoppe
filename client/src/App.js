import React,{useState, useEffect} from 'react'
import Login from './Login'
import Signup from './Signup'
import Candy from './Candy'
import Reviews from './Reviews'
import Header from './Header'
import NavBar from './NavBar'
import Candyform from './Candyform'
import Reviewform from './Reviewform'
import {Route, Switch} from 'react-router-dom'
import './App.css';

function App ({review}){

  const [user, setUser] = useState({})
  const [candies, setCandies] = useState([])
  const [reviews, setReviews] = useState([])
  const [loggedIn, setLoggedIn] = useState(true)

useEffect(() => {
  fetch("/me")
  .then (res =>{
    if (res.ok) {
      res.json()
      .then (user => {
        setUser (user)
        setLoggedIn(true)
      })
    } else {
      setUser({})
      setLoggedIn(false)
    }
  })
  }, [])

  function handleLogout() {
    setUser({})
    fetch('/logout', {
      method: 'DELETE'
    })
  }

  function makeNewCandy(newCandy){
    const arraryNewCandies = [...candies, newCandy]
    setCandies(arraryNewCandies)
  }

  function makeNewReview(newReview){
    const arraryNewReviews = [...reviews, newReview]
    setReviews(arraryNewReviews)
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
                <button onClick={handleLogout} class="logbutton">Logout</button>
                {loggedIn ? <p>You are logged in</p> : <p>You are logged out</p> }
              </Route>
              <Route path="/signup">
                <Signup user={user} setUser={setUser}/>
              </Route>
              <Route path="/candyform">
                <Candyform makeNewCandy={makeNewCandy}/>
              </Route>
              <Route path="/reviews">
                <Reviews />
              </Route>
              <Route path="/reviewform">
                <Reviewform makeNewReview={makeNewReview} review={review}/>
              </Route>
            </Switch>
      </div>   
  )
}

export default App