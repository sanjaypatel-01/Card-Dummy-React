import React from "react";
import { Link, Outlet } from "react-router-dom";

function User() {
  return (
    <div className="bg-zinc-200 w-full h-full flex flex-col items-center justify-center rounded">
      <div className="flex flex-col text-black-900 font-semibold w-1/2 p-5 gap-1 mb-8">
        <Link className="hover:font-bold hover:bg-blue-400 bg-blue-300 p-2 rounded mb-1" to="/user/harsh">Harsh</Link>
        <Link className="hover:font-bold hover:bg-blue-400 bg-blue-300 p-2 rounded mb-1" to="/user/sanjay">Sanjay</Link>
        <Link className="hover:font-bold hover:bg-blue-400 bg-blue-300 p-2 rounded mb-1" to="/user/anubhav">Anubhav</Link>
      </div>

      <h2 className="bg-blue-400 p-12 rounded text-white font-bold text-2xl mb-12">
        User
      </h2>
      <hr />
      <Outlet/>
    </div>

  );
}

export default User;
