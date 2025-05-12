import React from "react";

const Header = ({ searchTerm, setSearchTerm }) => {
  const controlledKey = (e) => {
    if (e.key === "enter") {
      e.preventDefault();
    }
  };
  return (
    <header className="bg-black text-white p-4 mg-0 border-2 border-black border-b-neutral-900">
      <div className="grid grid-cols-3 items-center gap-4">
        <div className="">
          <h1 className="text-green-500 text-3xl font-bold">
            Mot<span className="text-white">ion</span>
          </h1>
        </div>
        <div className="">
          <input
            className="border-0 bg-white/10 rounded-sm text-white w-full h-10 pl-2"
            type="text"
            value={searchTerm}
            name=""
            id=""
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={controlledKey}
          />
        </div>

        {/* genre section */}
        <div className="relative group text-center z-10">
          <button className="text-2xl font-bold cursor-pointer text-green-500">
            Genre
          </button>
          {/* All genre button */}

          {/* The div thats contains the dropdown menu */}
          <div
            className="absolute hidden group-hover:block bg-gray-950 text-white w-full mt-0.5 rounded-md font-bold text-md"
            onClick={() => setSelectedGenre("All")}
          >
            {/* The dropdown menu */}
            <button
              className="w-full px-4 py-2 hover:bg-green-800"
              onClick={() => setSelectedGenre("Action")}
            >
              Action
            </button>
            <button
              className="w-full px-4 py-2 hover:bg-green-800"
              onClick={() => setSelectedGenre("Sci-Fi")}
            >
              Sci-Fi
            </button>
            <button
              className="w-full px-4 py-2 hover:bg-green-800"
              onClick={() => setSelectedGenre("Drama")}
            >
              Drama
            </button>
            <button
              className="w-full px-4 py-2 hover:bg-green-800"
              onClick={() => setSelectedGenre("Horror")}
            >
              Horror
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
