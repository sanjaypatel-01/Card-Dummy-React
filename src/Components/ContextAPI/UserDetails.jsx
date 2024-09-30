import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userContext } from "./Context";

function UserDetails() {
  const { id } = useParams();
  const { users } = useContext(userContext);
  console.log(users[id]);
  const Navigate = useNavigate()

  return (
    <div className="p-10">
      <h1 className="text-red-500 text-2xl font-bold">
        {users[id].username}
      </h1>
      <h1 className="text-red-400 text-xl font-bold">
        {users[id].city}
      </h1>
      <button onClick={()=> Navigate(-1)} className="rounded px-2 py-1 bg-red-300 text-white mt-10">Go Back</button>
    </div>
  );
}

export default UserDetails;
