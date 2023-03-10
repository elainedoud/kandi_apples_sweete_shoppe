import React, {useEffect, useState} from 'react'
import CandyCard from './CandyCard'

function Candy(){

  const [candies, setCandies] = useState([])

  useEffect(() => {
    fetch("/candy")
    .then (res => res.json())
    .then(candies => setCandies(candies))
  }, [])

    return (
        <div>
            {candies.map(candy =>{
               return <CandyCard key={candy.id} candy={candy}/>
            })}    
        </div>
    );
}

export default Candy