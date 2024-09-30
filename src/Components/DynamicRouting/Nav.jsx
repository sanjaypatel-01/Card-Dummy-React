import React from "react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="flex gap-6 mb-2 font-semibold ">
        <NavLink
        // Using Inline CSS
          style={(e) => {
            return {
              color: e.isActive ? "blue" : " ",
              fontWeight: e.isActive ? "bold" : " ",
            };
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
        // Using Tailwind CSS
          className={({ isActive }) => (isActive ? "text-blue-700 font-bold " : "")}
          to="/user"
        >
          User
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-700 font-bold" : "")}
          to="/about"
        >
          About
        </NavLink>
      </nav>
    </div>
  );
}

export default Nav;
