import React, {useEffect, useState} from 'react'
import ReviewCard from './ReviewCard'

function Reviews (){

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch("/review")
        .then(res => res.json())
        .then(data => setReviews(data))
      }, [])

    return(
        <div>
            {reviews.map(review =>{
              return <ReviewCard key={review.id} review={review}/>
            })} 
        </div>
    )
}


export default Reviews