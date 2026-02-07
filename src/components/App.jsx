import React, { useState, useEffect } from "react";

function App() {
    const [image, setImage] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        callImage()
    },[])

    function callImage() {
        setLoading(true)
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data => {
                setImage(data.message)
                setLoading(false)
            })
            .catch(error => {
                console.error("error:", error)
                setLoading(false)
            });
        
    }

    return (
        <div>
            {loading ? <p>Loading...</p> : <img src={image}/>}

            <button onClick={callImage}>New Image</button>
        </div>
    )
}

export default App
