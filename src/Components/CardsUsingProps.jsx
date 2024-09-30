import React from "react";

function CardsUsingProps({ name, profession, image }) {
  return (
    <div className="w-52 bg-zinc-200 rounded-md overflow-hidden m-3">
      <div className="w-full h-44 bg-sky-200">
        <img className="h-full w-full object-cover" src={image} />
      </div>

      <div className="w-full p-3">
        <h1 className="font-semibold text-xl">{name}</h1>
        <h2 className="text-xs ">{profession}</h2>
        <button onClick={()=> alert(`Friend added: ${name} is a friend`)}
        className="px-3 py-1 rounded bg-blue-500 text-xs text-white mt-2">
          Add Friend
        </button>
      </div>
    </div>
  );
}

export default CardsUsingProps;

/* Usage in App.js 

import React from "react";
import CardsUsingProps from "./Components/CardsUsingProps";

function App() {
  const data = [
    {
      name: "Harsh",
      profession: "Artist",
      image: "https://media.istockphoto.com/id/1587315781/photo/happy-laughing-guy-posing-with-arms-folded.webp?a=1&b=1&s=612x612&w=0&k=20&c=pQjzvhpF0m66H5O9YMIgM6tAjtP1BUoAP4ChXnIpJTA=",
    },
    {
      name: "Sanjay",
      profession: "Software Developer",
      image: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww",
    },
    {
      name: "Rahul",
      profession: "Painter",
      image: "https://media.istockphoto.com/id/1150096021/photo/smiling-mature-manager-sitting-at-creative-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=EeyO5sFhpLAVxaUqbzZdQDRCLU4negYbSGYO6UJwc1Q=",
    },
    {
      name: "John",
      profession: "Architect",
      image: "https://media.istockphoto.com/id/1413204314/photo/happy-man-at-supermarket-store.webp?a=1&b=1&s=612x612&w=0&k=20&c=3sOzyYdhm9m6nzAYfJ_ZopRu0Jkva4cXpS1Mv-0FLhk=",
    },
  ];

  return (
    <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
      {data.map((item, index) => (
        <CardsUsingProps key={index}
          name={item.name}
          profession={item.profession}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default App;


*/
