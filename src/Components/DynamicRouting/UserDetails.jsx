import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function UserDetails() {
  const { name } = useParams();

  const navigate = useNavigate();

  const GoBackHandler = () => {
    // Two ways to navigate back, the first is to navigate back to previous page and second to navigate back to defined page
    // navigate("/user")
    navigate(-1)
  }

  return (
    <div className="bg-zinc-200 w-full h-full flex flex-col items-center justify-center rounded">
      <h4 className="text-2xl px-2 py-1 font-semibold rounded text-black-600 mt-8 cursor pointer">
        User Details :{" "}
      </h4>
      <h2 className="bg-red-400 p-3 rounded text-white mt-8 mb-16 font-bold text-xl">
        Hello {name}
      </h2>
      <h4 onClick={GoBackHandler} className="bg-blue-400 text-md px-2 py-1 font-semibold rounded text-white mb-28 cursor-pointer">
        Go Back{" "}
      </h4>
    </div>
  );
}

export default UserDetails;
