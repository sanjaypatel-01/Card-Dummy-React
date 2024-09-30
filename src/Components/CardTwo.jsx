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

  const handleClickDownload = ()=> {alert("Chal raha hai")};

  return (
    <div className="w-full h-screen bg-zinc-300 flex flex-col gap-5 justify-center items-center">
      {data.map((elem, index) => (
        <div className="flex gap-2">
          <div className="w-32 h-full">
            <img
              src="https://images.unsplash.com/photo-1474692295473-66ba4d54e0d3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNvbmd8ZW58MHx8MHx8fDA%3D"
              alt=""
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div>
            <div key={index} className="w-96 px-3 py-2 bg-zinc-100 rounded-md">
              <h1 className="font-semibold text-xl">{elem.SongTitle}</h1>
              <p className="text-sm mt-2">{elem.SongDescription}</p>
              <button onClick={handleClickDownload} className="text-zinc-100 font-semibold text-sm py-1 px-2 rounded-md mt-2 bg-blue-400 hover:bg-blue-600">
                Dwonload
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardTwo;
