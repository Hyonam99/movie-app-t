import React, {useState, useContext} from 'react'
import { MovieContext } from '../Contexts/PageContexts'

const MovieCard = ({eachmovie}) => {
  const style = {backgroundImage:`url(${eachmovie.Poster})`}
  return (
    <section className="movie-card">
      <div className="movie-card-box">
        <div className="movie-card" style={style}>
          <h4>{eachmovie.Title}</h4>
        </div>
      </div>
    </section>
  )
}

export default MovieCard