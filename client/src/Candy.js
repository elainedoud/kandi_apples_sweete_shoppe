import React, {useEffect, useState} from 'react'
import CandyCard from './CandyCard'

function Candy(){

  const [candy, setCandy] = useState([])

  useEffect(() => {
    fetch("/candy")
    .then (res => res.json())
    .then(data => setCandy(data))
  }, [])

    return (
        <div>
            {candy.map((candy)=>{
                return <CandyCard key={candy.id} candy={candy}/>
            })}      
        </div>
    );
}

export default Candy