// Actors.js
import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <>
      <h1>Actors Page</h1>
      {actors.map((actor, ind) => (
        <div key={ind}>
          <h3 data-testid="actor-name">Name: {actor.name}</h3>
          <p>Movies:</p>
          <ul>
            {actor.movies.map((movie, ind) => (
              <li key={ind} data-testid="movie">
                {movie}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default Actors;
