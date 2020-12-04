import React , { useState, useEffect } from 'react'
import axios from 'axios'


export default function SingleMovie (props) {
  console.log('props------ ', props)

  const [movie , setMovie ] = useState({})

  useEffect(()=> fetchMovie())

  const fetchMovie = async () => {
    try {
      console.log('match.params ', props.match.params.movieId)
      const { data : movie } = await axios.get(`http://www.omdbapi.com/?apikey=4389c305&i=${props.match.params.movieId}`)
      setMovie(movie)
    } catch (error) {
      console.log(error)
    }
  }

  console.log('movie on state: ', movie)
  return (
    <div>
    <img src={movie.Poster} /> {/* need to account for when there's no poster */}

    </div>
  )
}
