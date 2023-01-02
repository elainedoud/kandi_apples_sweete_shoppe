import React, {useEffect, useState} from 'react'
import CandyCard from './CandyCard'

function Candy(){

  const [candies, setCandies] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/candy")
    .then (res => res.json())
    .then(data => setCandies(data))
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