import { actors } from "../data";
import NavBar from "../components/NavBar";

function Actors() {
  const actorArticles = actors.map((actor) => {
    const actorMovies = actor.movies.map((movie) => (
      <li key={movie}>{movie}</li>
    ));
    return (
      <article key={actor.name}>
        <h2>{actor.name}</h2>
        <ul>{actorMovies}</ul>
      </article>
    );
  });
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorArticles}
      </main>
    </>
  );
}

export default Actors;
