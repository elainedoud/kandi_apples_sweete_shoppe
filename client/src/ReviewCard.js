import React from 'react'

function ReviewCard({review}){

    return(
        <div className="Reviewbox">
            <p className="ReviewCandyName">{review.candy.name}</p>
            <p className="ReviewComment">{review.comment}</p>
            <p className="ReviewUserName">{review.customer.username}</p>
        </div>
    )
}

export default ReviewCard

