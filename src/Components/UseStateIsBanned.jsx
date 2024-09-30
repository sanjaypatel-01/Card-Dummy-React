import React, {useState} from "react";

function UseStateIsBanned() {

    const [val, setVal] = useState({ name: "Sanjay", isBanned: false });
    
    return (
        <div className="mt-10 ml-10 p-8 bg-zinc-300 rounded-md gap-3 w-60 h-60">
            <h1 className="bg-white p-2 rounded"> Name: {val.name} </h1>
            <h2 className="bg-white p-2 rounded mt-2"> Banned: {val.isBanned.toString()} </h2>
            <button onClick={() => setVal({...val, isBanned: !val.isBanned})} className= {`rounded py-2 px-2 w-full ${val.isBanned ? "bg-blue-500" : "bg-red-500"} text-white mt-5`}>
                Change
            </button>

        </div>
    )
}

export default UseStateIsBanned;