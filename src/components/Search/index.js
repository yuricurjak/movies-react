import React, { useState } from 'react';
import videoButton from '../../assets/video.svg';
import Modal from '../Modal';
import api from '../../services/api';
import './index.css';

export default function Search() {
  const [movieName, setMovieName] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);

  async function submitMovies() {
    const { data: { results } } = await api.get(
      `/search/movie?language=pt-BR&region=BR$&query=${movieName}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        }
      }
    );
    results.length < 4 ? setSearchMovies(results.slice(0, results.length)) : setSearchMovies(results.slice(0, 4));
  }

  return (
    <>
      <section>
      <div className="container search-background-color">
        <div className="row py-4 justify-content-center">
          <div className="col-md-6">
            <form>
              <div className="input-group">
                <input type="text" className="form-control search-background-color search-placeholder-color" placeholder="Buscar por filmes" 
                aria-label="Buscar por filmes" aria-describedby="Buscar por filmes" onChange={(event) => setMovieName(event.target.value)}/>
                <div className="input-group-append">
                  <button onClick={submitMovies} className="btn search-btn-color d-flex" type="button">
                    <img className="search-max align-self-center" src={videoButton} alt="Pesquisar"/>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row text-center mt-3 justify-content-center">
          {searchMovies.length > 0 ? searchMovies.map( movie => (
          <div key={movie.id} className="col-xl-3 col-md-6 text-white">
            <div className="search-img-movies d-flex justify-content-center">
              <img className="h-100 w-100" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="Filme resultado da pesquisa"/>
            </div>
            <h3 className="my-3">{movie.title}</h3>
          </div>
          )) : 
          <div className="text-white d-flex align-items-center search-img-movies">
            <h3 className="display-4 search-empty-text">
              Encontre os melhores filmes
            </h3>
          </div>
          }
        </div>
      </div>
    </section>
    </>
  );
}