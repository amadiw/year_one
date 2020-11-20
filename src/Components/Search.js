import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [searching, setSearching] = useState(false);
  const [message, setMessage] = useState(null);
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState([]);


  const searchMovies = async (evt) => {

    evt.preventDefault();
    setSearching(true);
    try {
      const { data : results} = await axios.get(
        `http://www.omdbapi.com/?apikey=4389c305&s=${query}`
      );
      setMessage(null);
      setMovie(results.Search);
      setSearching(false);
    } catch (error) {
      setMessage("An unexpected error occured");
      setSearching(false);
    }
  };
  console.log('movie------ ', movie)

  return (
    <div>
      <h2>SEARCH</h2>
      <form onSubmit={searchMovies}>
        <input type="text" name="query" placeholder="enter movie title"
        value={query} onChange={(evt) => {setQuery(evt.target.value)}}/>
        <button type="submit">X</button>
      </form>
      <div>
        {movie.map(elem => (
          <div key={elem.imdbID}>
          <div>{elem.Title}</div>
          </div>
          )
      )}
      </div>
    </div>
  );
}
