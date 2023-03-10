import React,{useState} from 'react'

function Reviewform({makeNewReview, review}){

    const [candyName, setCandyName] =useState("")
    const [comment, setComment] = useState("")
    const [userName, setUserName] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        fetch("/review", {
            method: "POST",
            headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    candy_id: candyName,
                    comment: comment,
                    customer_id: userName
                })
     })
     .then(res => res.json())
     .then(newReview => makeNewReview(newReview))
    }

    return(
        <form onSubmit={handleSubmit}>
            <label form="candy-name-input" className="candyform">Candy Id:</label>
            <input type="text" name="candy-name-input" value={candyName} onChange={(e)=>setCandyName(e.target.value)} />
            <label form="comment-input" className="candyform">Comment:</label>
            <input type="text" name="comment-input" value={comment} onChange={(e)=>setComment(e.target.value)}/>
            <label form="user-name-input" className="candyform">User Id:</label>
            <input type="text" name="user-name-input" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
            <input type="submit" value="Add Comment" className="candyform"/>
        </form>
    );
}

export default Reviewform