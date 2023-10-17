import { movies } from "../data";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const params = useParams();
  console.log(params);
  const currentMovie = movies.find((movie) => movie.title === params.title);
  const genresArray = currentMovie.genres.map((genre) => (
    <span key={genre}>{genre}</span>
  ));
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {/* Movie info here! */}
        <h1>{currentMovie.title}</h1>
        <p>{currentMovie.time}</p>
        {genresArray}
      </main>
    </>
  );
}

export default Movie;
