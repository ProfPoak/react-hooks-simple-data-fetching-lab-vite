import react from "react";
import useState from "react";
import useEffect from "react";

function App() {
    const [image, setImage] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        console.log("image on render")
    },[])

    function callImage() {
        fetch()
    }

    return (
        <div>

        </div>
    )
}

export default App
