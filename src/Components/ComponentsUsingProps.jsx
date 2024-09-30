import React from "react";

function ComponentsUsingProps({text, Color}) {
    return (
        <div className="flex">

            <button className= {`py-2 px-2 text-sm rounded text-white ${Color} m-2`}> 
                {text} 
            </button>

        </div>
    )
}

export default ComponentsUsingProps;

/*
    This method accepts two props: text and Color. this method is called props drilling. 
    In App.jsx

<div className="w-full h-screen">
  
<ComponentsUsingProps text = "Know More" Color = "bg-blue-600" />
<ComponentsUsingProps text = "Download" Color = "bg-red-600"/>

</div>

*/