import React from "react";

function CardsUsingPropsThree({data, handleClick, index}) {

  const {song, artist, image, added} = data;

  return (
    <div className="w-60 h-32 flex flex-col items-center justify-center ">
      <div className="w-full h-full bg-white rounded flex p-2">
        <div className="overflow-hidden rounded-md w-28 h-24 mr-2 mb-5">
          <img
            className="object-cover w-full h-full"
            src={image}
            alt="Person"
          />
        </div>
        <div className="ml-2">
          <h3 className="text-md font-semibold">{song}</h3>
          <h4 className="text-sm">{artist}</h4>
        </div>
      </div>
      <button onClick={()=>handleClick(index)} className={`text-xs text-white ${added === false ? "bg-orange-500": "bg-teal-600"} rounded-full px-2 py-2 w-3/5 -translate-y-1/2`}>
        {added === false ? "Add To Favorites" : "Added"}
      </button>
    </div>
  );
}

export default CardsUsingPropsThree;

/* // NavbarCardsUsingPropsThree.jsx

import React from "react";
function NavbarCardsUsingPropsThree({data}) {
  return (
    <div className="Navbar w-full px-16 py-8 flex justify-between items-center">
      <h3 className="text-orange-500 font-semibold">Orange</h3>
      <div className="flex gap-2 text-white bg-orange-500 px-5 py-2 text-sm rounded-md">
        <h3> Favourites </h3>
        <h4 className="font-semibold"> {data.filter(item => item.added).length } </h4>
      </div>
    </div>
  );
}
export default NavbarCardsUsingPropsThree; */

/* //App.jsx

import React, { useState } from "react";
import Card from "./Components/Card";
import CardTwo from "./Components/CardTwo";
import ExampleUseState from "./Components/ExampleUseState";
import UseStateIsBanned from "./Components/UseStateIsBanned";
import UseStateArray from "./Components/UseStateArray";
import UseStateArray2 from "./Components/UseStateArray2";
import UseStateImageScroll from "./Components/UseStateImageScroll";
import ComponentsUsingProps from "./Components/ComponentsUsingProps";
import CardsUsingProps from "./Components/CardsUsingProps";
import CardsUsingPropsTwo from "./Components/CardsUsingPropsTwo";
import CardsUsingPropsThree from "./Components/CardsUsingPropsThree";
import NavbarCardsUsingPropsThree from "./Components/NavbarCardsUsingPropsThree";

function App() {
  const data = [
    {
      song: "tere waste",
      artist: "Harsh Sharma",
      image:
        "https://media.istockphoto.com/id/1587315781/photo/happy-laughing-guy-posing-with-arms-folded.webp?a=1&b=1&s=612x612&w=0&k=20&c=pQjzvhpF0m66H5O9YMIgM6tAjtP1BUoAP4ChXnIpJTA=",
      added: false,
    },
    {
      song: "Tum Mile",
      artist: "Neeraj Shridhar",
      image:
        "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww",
      added: false,
    },
    {
      song: "Pehla Nasha",
      artist: "Harshdeep Kaur",
      image:
        "https://media.istockphoto.com/id/1150096021/photo/smiling-mature-manager-sitting-at-creative-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=EeyO5sFhpLAVxaUqbzZdQDRCLU4negYbSGYO6UJwc1Q=",
      added: false,
    },
    {
      song: "Tareefan",
      artist: "Sapna Awasthi",
      image:
        "https://media.istockphoto.com/id/1413204314/photo/happy-man-at-supermarket-store.webp?a=1&b=1&s=612x612&w=0&k=20&c=3sOzyYdhm9m6nzAYfJ_ZopRu0Jkva4cXpS1Mv-0FLhk=",
      added: false,
    },
  ];


  const [songData, setSongData] = useState(data)

  const handleClick = (index)=> {
    setSongData((prev) =>{
      return prev.map((item, itemIndex) => {
        if(itemIndex === index) {
          return {...item, added: !item.added};
        }
        return item;
      })
    })
  }

  return (
    <div className="bg-zinc-200 w-full h-screen">
      <NavbarCardsUsingPropsThree data={songData} />
      <div className="px-20 flex gap-10 mt-10 flex-wrap">
        {songData.map((obj, index)=>{
          return <CardsUsingPropsThree data={obj} handleClick={handleClick} index={index} key={index} />
        })}
      </div>
    </div>
  );
}

export default App;


// {data.map(obj=>{ 

*/