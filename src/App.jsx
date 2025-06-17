import { useState } from "react";
import Header from "./components/header";
import MovieList from "./components/movieList";
import movies from "./components/movieData"

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  //filter movies by searchterm and genre
  const filteredMovies = movies.filter((movie) => {
    let matchesGenre;
    //check if genre matches
    if (selectedGenre === "All") {
      matchesGenre = true;
    } else {
      matchesGenre = movie.genre === selectedGenre;
    }
    //check if title matches search
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    if (matchesGenre && matchesSearch) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <div>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}
      selectedGenre={selectedGenre}
      setSelectedGenre={setSelectedGenre} />
      <MovieList searchTerm={searchTerm}
      movies={filteredMovies} />
    </div>
  );
}

export default App;
