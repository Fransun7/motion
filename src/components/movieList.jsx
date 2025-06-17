import React from "react";

const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {movies.length > 0 ? (
        movies.map((movie, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md hover:scale-105 transition-transform">
            <img src={movie.poster} alt={movie.title} className="w-full h-48 object-cover rounded-md mb-2" />
            <h2 className="text-white text-lg font-bold mb-1">{movie.title}</h2>
            <p className="text-gray-400 text-sm mb-2">{movie.genre}</p>
            <a
              href={movie.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Download
            </a>
          </div>
        ))
      ) : (
        <p className="text-white col-span-full text-center">No movies found.</p>
      )}
    </div>
  );
};

export default MovieList;
     
