import { movies } from "../data";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const moviesArray = movies.map((movie) => (
    <MovieCard key={movie.title} title={movie.title} />
  ));
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {moviesArray}
      </main>
    </>
  );
}

export default Home;
