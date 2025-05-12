import { useState } from "react";
import Header from "./components/header";
import MovieList from "./components/movieList";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [setGenre, setSelectedGenre] = useState("All");

  return (
    <div>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <MovieList searchTerm={searchTerm} />
    </div>

    // <div>
    //   <h1 style={{ color: "red" }}>TEST</h1>
    //   <Header />
    // </div>
  );
}

export default App;
