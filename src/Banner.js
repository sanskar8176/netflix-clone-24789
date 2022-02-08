import React, { useState, useEffect } from 'react'
import axios from './axios';
import requests from './requests';
import "./Banner.css"

import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


function Banner() {
    const [movie, setMovie] = useState([]);
  
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
  
      async function fetchData() {
  
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
          ]
        );
       
        return request;
      }
      fetchData();
    }, []);
  
    // console.log(movie);
  
    function truncate(str, n) {
      return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }


   
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,  
    }
  }
  
  const handleClick = (movie) => {
       if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name|| "")
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        }).catch((error) =>{
           console.log(error);
           alert('trailer not found') ;});
    }
  }

    return (
        <header className="banner"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"   )`,
            backgroundPosition: "center center"
          }}
        >
          <div className="banner_contents">

            <h1 className="banner_title ">
              {movie?.title || movie?.name || movie?.original_name}
            

            </h1>

            <div className="bannerRating">{` Rating ${movie?.vote_average}/10 ( ${movie?.vote_count} votes )`}</div> 
            <div className="banner_buttons">
              <button key={movie.id} onClick={() => handleClick(movie)}  className="banner_button">Play</button>
              <button className="banner_button">My List</button>
            </div>

            <h1 className="banner_description  ">
            {truncate(movie?.overview, 200)}

            </h1>
          </div>
    
          <div className="banner--fadeBottom" />
     
      <div className='trailervideo'>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}  />}
        </div>

        </header>
    
      )
}

export default Banner;
