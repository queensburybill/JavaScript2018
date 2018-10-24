import React from "react";

import movies from "../../movies/movies.js";

function Movie(props) {
  const movieKey = props.match.params.title;
  const movie = movies[movieKey];
  return (
    <div>
      <h1>{movie.title}</h1>
      <div>
        <img
          src={movie.poster}
          alt=""
          width="240"
          height="360"
          className="mb-3"
        />
      </div>
      <p>{movie.synopsis}</p>
      <p>
        <strong>Release Date</strong> {movie.releaseDate}
      </p>
      <div>
        <strong>Show Times</strong>
        <ul>
          {movie.times.map((time, index) => {
            const timeKey = `${movieKey}-time-${index}`;
            return <li key={timeKey}>{time}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Movie;
