import React, {useState, useEffect} from 'react'
import '../StyleSheets/mainstyle.css'
import NavBar from '../Components/NavBar'
import SearchBar from '../Components/SearchBar'
import MovieCards from '../Components/MovieCards'
import axios from "axios";
import { MovieContext } from '../Contexts/PageContexts'

const LandingPage = () => {
  const userBase = "https://www.omdbapi.com/?apikey=3e4adb96&s=Avengers"; 
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    async function getCloudUsers (){
      const cloudResponse = await axios.get(userBase);
      console.log(cloudResponse.data.Search)
      setMovie(cloudResponse.data.Search)
    }

    getCloudUsers()
  }, []);

  if (!movie) return `please refresh your page an error occured`;
  if (error) return `please refresh your page an error occured`;

  return (
    <>
      <MovieContext.Provider value={{movie, setMovie, searchValue, setSearchValue}}>
      <NavBar/>
        <section className="hero-section-container">
          <section className="hero-section">
            <div className="hero-section-text">
              <p>Watch Something Incredible</p>
            </div>
          </section>
        </section>
        <section className="page-body">
        <SearchBar />
        <MovieCards />
        <MovieCards />
        </section>
        </MovieContext.Provider>
    </>
  )
}

export default LandingPage