import React from 'react';
import "./HomeScreen.css";
import Nav from '../Nav';
import Banner from '../Banner';
import requests from '../Requests';
import Row from '../Row';

const HomeScreen = () => {
  return (
    <div>
        <Nav />

        <Banner />
        
        <Row title="NETFLIX ORIGINALS"
             fetchUrl={requests.fetchNetflixOriginals}
             isLargeRow
        />
        <Row title="Trending Now"
             fetchUrl={requests.fetchTrending}
        />
        <Row title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        />
        <Row title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        />
        <Row title="Comady Movies"
        fetchUrl={requests.fetchComadyMovies}
        /><Row title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        /><Row title="Romance Movies"
        fetchUrl={requests.fetchRomanticMovies}
        />
        <Row title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        />
    </div>
  )
}

export default HomeScreen