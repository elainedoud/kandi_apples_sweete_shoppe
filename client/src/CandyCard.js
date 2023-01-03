import React from 'react'

function CandyCard({candy}){

    return(
        <div className="Candybox">
            <img src={candy.image} alt={candy.name} className="candyimage"/>
            <p className="name">{candy.name} </p>
            <p className="category">{candy.category}</p>
        </div>
    )

    }
export default CandyCard