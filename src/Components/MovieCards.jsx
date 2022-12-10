import React, {useState, useEffect, useContext} from 'react'
import MovieCard from './MovieCard'
import { MovieContext } from '../Contexts/PageContexts'

const MovieCards = () => {

  const {movie, setMovie, searchValue} = useContext(MovieContext); 
  const showmovie = movie.filter((filtermovie) => {
    // if(searchValue.length > 0 || searchValue != null || searchValue != undefined)
    if((filtermovie.Title.toLowerCase().includes(searchValue)||filtermovie.Title.toLowerCase().includes(searchValue)) && (searchValue.length > 0 || searchValue != null || searchValue != undefined)){
      return filtermovie
    }else if (searchValue === null || searchValue === undefined){
      return filtermovie
    }
  }).map((eachmovie)=> <MovieCard eachmovie={eachmovie}/>)
  return (
    <section className='movie-cards-container'>
      <h4 className='movie-cards-container-category'>Action Movie</h4>
      <section className='movie-cards-holder'>
        {showmovie}
      </section>
    </section>
  )
}

export default MovieCards