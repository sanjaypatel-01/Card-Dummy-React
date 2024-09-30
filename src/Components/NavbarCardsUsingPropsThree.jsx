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

export default NavbarCardsUsingPropsThree;
