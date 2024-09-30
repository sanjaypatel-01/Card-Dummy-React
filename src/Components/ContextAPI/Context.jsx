import React, { createContext, useState } from "react";

export const userContext = createContext();

const Context = (props) => {
  const [users, setUsers] = useState([
    { id: 0, username: "John Doe", city: "USA" },
    { id: 1, username: "Krishna", city: "INDIA" },
    { id: 2, username: "Julie", city: "COLOMBIA" },
  ]);

  return (
    <userContext.Provider value={{users, setUsers}}>
      {props.children}
    </userContext.Provider>
  );
};

export default Context;


// {props.children} ye hai, basically hamne, context se poore application ko hi wrap kr diya hai

{/* <Context>
    <BrowserRouter> 
        <App />
    </BrowserRouter>
</Context> */}