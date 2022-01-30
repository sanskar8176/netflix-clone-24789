import React from 'react';
import "./HomeScreen.css";
import Nav from "../Nav.js";
import Banner from "../Banner.js";
import requests from '../requests';
import Row from '../Row';
import Footer from '../Footer';

function HomeScreen() {
  return <div className='homescreen'>
    
     		<Nav/>
    		<Banner/>

   			<Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl={requests.fetchNetflixOriginals} />
			<Row title="Trending" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
			<Footer/>
  </div>;
}

export default HomeScreen;
