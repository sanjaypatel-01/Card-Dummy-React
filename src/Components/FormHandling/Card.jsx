import React from "react";

function Card({user, handleRemove, id}) {
  return (
    <div>
        <div className="w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-3">
          <div className="image w-16 h-16 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={user.image}
              alt=""
            />
          </div>
          <h1 className="font-semibold mt-1 text-xl text-center">{user.name}</h1>
          <h4 className="text-xs font-semibold opacity-60 mb-2">
            {user.email}
          </h4>
          <p className="text-xs text-center font-semibold leading-1 tracking-tight">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consectetur adipisicing.
          </p>
          <button onClick={()=> handleRemove(id)} className="bg-red-600 py-1 px-2 rounded-md text-white text-xs mt-3 font-semibold">
            Remove It
          </button>
        </div>
    </div>
  );
}

export default Card;
