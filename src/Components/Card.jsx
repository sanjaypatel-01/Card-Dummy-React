import React from "react";

function Card() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=1496&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Amazon Basics.",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, itaque?",
    },
    {
      image:
        "https://images.unsplash.com/photo-1621768216002-5ac171876625?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwcGxlfGVufDB8fDB8fHww",
      name: "Apple Products.",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      name: "Laptop Brands.",
      description: "Lorem ipsum dolor,",
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-500 ">
      {data.map((elem, index) => (
        <div key={index} className="w-52 bg-zinc-100 rounded-md overflow-hidden">
          <div className="w-full h-32 bg-zinc-300">
            <img
              className="w-full h-full object-cover"
              src={elem.image}
              alt="  "
            />
          </div>

          <div className="w-full px-3 py-3">
            <h2 className="font-semibold">{elem.name}</h2>
            <p className="text-xs mt-3">
              {elem.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
