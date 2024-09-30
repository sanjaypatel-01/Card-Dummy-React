import React, { useState } from "react";
import axios from "axios";
import Home from "./Components/ContextAPI/Home";
import { Link, Route, Routes } from "react-router-dom";
import User from "./Components/ContextAPI/User";
import About from "./Components/ContextAPI/About";
import UserDetails from "./Components/ContextAPI/UserDetails";

function App() {
  return (
    <div className=" w-full h-screen p-6">
      <nav className="flex justify-center gap-6 mb-12">
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
