import React from 'react'

function CandyCard({candy}){

    return(
        <div>
            <img src={candy.image} alt={candy.name}/>
            <p>{candy.name}</p>
            <p>{candy.category}</p>
        </div>
    )

}

export default CandyCard