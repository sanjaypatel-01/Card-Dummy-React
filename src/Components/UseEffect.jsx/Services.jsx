import React, { useEffect, useState } from "react";

function Services() {

    const [first, setFirst] = useState("this is normal data")
    const [second, setSecond] = useState("this is very large data")

    useEffect(() => {      
        console.log("Services component is Created");

        return () => {
            console.log("Services component is Deleted");
        }
    },[second])

    return (
        <div>
            
            <h1>{first}</h1>
            <button 
               onClick={() => setFirst("Noraml data has been changed")}
               className="rounded md-10 bg-red-200 p-2"
            >
                change Normal Data
            </button>

            <h1>{second}</h1>
            <button 
               onClick={() => setSecond("Very large data has been changed")} 
               className="rounded md-10 bg-blue-200 p-2"
            >
                change Large Data
            </button>

        </div>
    )

}

export default Services;