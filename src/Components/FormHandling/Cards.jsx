import React from "react";
import Card from "./Card";

function Cards({users, handleRemove}) {
  return (
    <div className=" w-full p-4 rounded flex justify-center gap-4 flex-wrap max-h-96 overflow-auto">

      {users.map((item, index) => {
        return <Card user={item} handleRemove={handleRemove} id={index} key={index} />
      })}
    </div>
  );
}

export default Cards;


// Agar cards jyada honge, toh ye property applicable ho jayegi
// max-h-96 overflow-auto
// Currently we don't need many cards here, we will do it with the map



// App.jsx

// import React, { useState } from "react";
// // import Card from "./Components/Card";
// // import CardTwo from "./Components/CardTwo";
// // import ExampleUseState from "./Components/ExampleUseState";
// // import UseStateIsBanned from "./Components/UseStateIsBanned";
// // import UseStateArray from "./Components/UseStateArray";
// // import UseStateArray2 from "./Components/UseStateArray2";
// // import UseStateImageScroll from "./Components/UseStateImageScroll";
// // import ComponentsUsingProps from "./Components/ComponentsUsingProps";
// // import CardsUsingProps from "./Components/CardsUsingProps";
// // import CardsUsingPropsTwo from "./Components/CardsUsingPropsTwo";
// // import CardsUsingPropsThree from "./Components/CardsUsingPropsThree";
// // import NavbarCardsUsingPropsThree from "./Components/NavbarCardsUsingPropsThree";
// // import FormHandling from "./Components/FormHandling";
// import Cards from "./Components/FormHandling/Cards";
// import Form from "./Components/FormHandling/Form";

// function App() {

//   const [users, setUsers] = useState([]);

//   const handleFormSubmitData = (data) => {
//     setUsers([...users, data])
//   }

//   const handleRemove = (id) => {
//     setUsers(() => users.filter((item, index) => index != id))
//   }

//   return (
//     <div className="bg-zinc-200 w-full h-screen flex items-center jsutify-center">
//       <div className="container mx-auto">
//         <Cards users={users} handleRemove={handleRemove} />
//         <Form handleFormSubmitData={handleFormSubmitData} />
//       </div>
//     </div>
//   );
// }

// export default App;

