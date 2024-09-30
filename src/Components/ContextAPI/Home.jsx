import React from "react";
import User from "./User";


function Home() {
    return (
        <div>
            Home
        </div>
    )
}

export default Home;


// App.jsx

// import React, { useState } from "react";
// import axios from "axios";
// import Home from "./Components/ContextAPI/Home";
// import { Link, Route, Routes } from "react-router-dom";
// import User from "./Components/ContextAPI/User";
// import About from "./Components/ContextAPI/About";
// import UserDetails from "./Components/ContextAPI/UserDetails";

// function App() {
//   return (
//     <div className=" w-full h-screen p-6">
//       <nav className="flex justify-center gap-6 mb-12">
//         <Link to="/">Home</Link>
//         <Link to="/user">User</Link>
//         <Link to="/about">About</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/user" element={<User />} />
//         <Route path="/user/:id" element={<UserDetails />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;


// main.jsx

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { BrowserRouter } from 'react-router-dom'
// import Context from './Components/ContextAPI/Context.jsx'

// createRoot(document.getElementById('root')).render(
  
//   <Context>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Context>
  
// )