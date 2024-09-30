import React, { useRef } from "react";

function FormHandling() {

    const name = useRef(null)
    const age = useRef(null)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(name.current.value, age.current.value)
    }

    return (
        <div className="bg-zinc-200 p-4">
           <form onClick={handleSubmit} action="">
           <input ref={name} type="text" placeholder="name"/>
            <input ref={age} type="text" placeholder="age"/>
            <input type="submit" />
           </form>
        </div>
    )
}

export default FormHandling;