import React, { useState, useEffect } from 'react';
import './index.css';
import api from '../../services/api';

export default function Carousel() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function getTrendingMovies() {
      const { data: { results } } = await api.get(
        '/trending/movie/week?language=pt-BR&region=BR',
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
          }
        }
      );
      
      setTrendingMovies(results.slice(0, 3));
    }
    getTrendingMovies();
  }, []);


  return (
    <section>
      <div className="container p-0">
        {trendingMovies.length ? (
        <div id="carouselMovies" className="carousel slide carousel-fade" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselMovies" data-slide-to="0" className="active"></li>
            <li data-target="#carouselMovies" data-slide-to="1"></li>
            <li data-target="#carouselMovies" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            {trendingMovies.length > 0 && trendingMovies.map(movie => (
            <div key={movie.id} className={`carousel-item ${movie === trendingMovies[0] ? 'active':''}` }>
              <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="d-block w-100 carousel-max-height" alt="Destaques da semana"/>
              <div className="carousel-caption d-none d-md-block">
                <h5>{movie.title}</h5>
                <p>{movie.overview}</p>
              </div>
            </div>
            ))
            }
          </div>
          <a className="carousel-control-prev" href="#carouselMovies" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselMovies" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
          </div>
        ): (
          <div style={{"height": "400px"}}>

          </div>
        )}
      </div>
    </section>
  );
}