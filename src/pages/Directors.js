import { directors } from "../data";
import NavBar from "../components/NavBar";

function Directors() {
  const directorArticles = directors.map((director) => {
    const directorMovies = director.movies.map((movie) => (
      <li key={movie}>{movie}</li>
    ));
    return (
      <article key={director.name}>
        <h2>{director.name}</h2>
        <ul>{directorMovies}</ul>
      </article>
    );
  });

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directorArticles}
      </main>
    </>
  );
}

export default Directors;
