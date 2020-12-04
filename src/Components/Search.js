import React, { useState } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom"
import SingleMovie from "./SingleMovie"

export default function Search(props) {
  const [searching, setSearching] = useState(false);
  const [message, setMessage] = useState(null);
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState([]); //change to plural movies/setMovies

console.log('props', props)
  const searchMovies = async (evt) => {

    evt.preventDefault();
    setSearching(true);
    try {
      const {data: {Search}} = await axios.get(
        `http://www.omdbapi.com/?apikey=4389c305&s=${query}`
      );
      setMessage(null);
      setMovie([...new Map(Search.map(item => [item.imdbID, item])).values()]); //removes duplicate Borat movie from API results
      setSearching(false);
    } catch (error) {
      setMessage("An unexpected error occured");
      setSearching(false);
    }
  };
  console.table('movie------ ', movie)

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
          <Link to={`/movies/${elem.imdbID}` }>
          <div>{elem.Title}</div>
          </Link>

          </div>
          )
      )}
      </div>
    </div>
  );
}
