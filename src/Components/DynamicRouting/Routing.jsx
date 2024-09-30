import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import User from "./User";
import About from "./About";
import UserDetails from "./UserDetails";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/user" element={<User />} > 
            <Route path="/user/:name" element={<UserDetails />} /> 
        </Route>

        <Route path="/about" element={<About />} />

        {/* <Route path="/user/:name" element={<UserDetails />} /> */}
      </Routes>
    </div>
  );
}

export default Routing;
