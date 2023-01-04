import React,{useState} from 'react'

function Candyform({makeNewCandy}){

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [category, setCategory] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        fetch("/candy", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                image: image,
                category: category
            })
        })
        .then(res => res.json())
        .then(newCandy => makeNewCandy(newCandy))

    }

    return (
        <form onSubmit={handleSubmit}>
            <label form="candy-name-input">Candy Name:</label>
            <input type="text" name="candy-name-input" value={name} onChange={(e)=>setName(e.target.value)} />
            <label form="candy-image-input">Candy Image URL:</label>
            <input type="text" name="candy-image-input" value={image} onChange={(e)=>setImage(e.target.value)}/>
            <label form="candy-category-input">Candy Category:</label>
            <input type="text" name="candy-category-input" value={category} onChange={(e)=>setCategory(e.target.value)}/>
            <input type="submit" value="Add Candy" />
        </form>
    );
}


export default Candyform