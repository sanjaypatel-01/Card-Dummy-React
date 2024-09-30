import React from "react";

function CardTwo() {
  const data = [
    {
      SongTitle: "Mahiya Ve",
      SongDescription:
        "A soulful romantic song that beautifully expresses longing and love.",
    },
    {
      SongTitle: "Tum Mile",
      SongDescription: "A heartfelt song that captures the emotions ",
    },
    {
      SongTitle: "Tera Hone Laga Hoon",
      SongDescription: "A soft, melodious tune between two people.",
    },
  ];

  return (
    <div className="w-full h-screen bg-zinc-300 flex flex-col gap-5 justify-center items-center">
      {data.map((elem, index) => (
        <div key={index} className="w-96 px-3 py-2 bg-zinc-100 rounded-md">
          <h1 className="font-semibold text-xl">{elem.SongTitle}</h1>
          <p className="text-sm mt-2">{elem.SongDescription}</p>
          <button className="text-zinc-100 font-semibold text-sm py-1 px-2 rounded-md mt-2 bg-blue-400 hover:bg-blue-500">
            Dwonload
          </button>
        </div>
      ))}
    </div>
  );
}

export default CardTwo;
