import React, { useState } from "react";

function UseStateArray() {

    const [val, setVal] = useState([1, 2, 3, 4, 5]);

    return (

        <div className="p-6 mt-5 ml-5 bg-zinc-400 rounded w-32 h-46">

            {val.map((item, index) => (<h1 className="flex gap-3 justify-center items-center"> {item} </h1>))}

            <button className="py-2 px-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-3 w-full text-semibold"
                onClick={()=> setVal(()=> val.filter((item, index) => index!= val.length-1))}>
                Click
            </button>

        </div>

    )

}

export default UseStateArray;