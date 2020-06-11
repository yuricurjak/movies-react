import React, { useEffect, useState } from 'react';
import Modal from '../Modal';
import api from '../../services/api';
import './index.css';

export default function Highlights() {
  const [popular, setPopular] = useState([]);
  const [sinopseText, setSinopseText] = useState('');

  function formatDate(date) {
    const arraySplit = date.split('-');
    arraySplit.reverse();
    const formattedDate = arraySplit.join('/');
    
    return formattedDate;
  }

  useEffect(() => {
    async function getPopular() {
      const { data: { results } } = await api.get(
        '/movie/popular?language=pt-BR',
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
          }
        }
      ); 
      setPopular(results.slice(0, 3));
    }
    getPopular();

  }, []);

  return (
    <>
      <Modal sinopse={sinopseText}/>
      <section>
        <div className="container py-4 highlights-background-color">
          <div className="text-center py-4">
            <h2 className="display-4 highlights-title-color">Mais populares</h2>
          </div>
          <div className="row">
            {popular.length > 0 && 
            popular.map(popularMovie => (
            <div key={popularMovie.id} className="col-md-4 d-flex justify-content-center">
              <div className="card my-2" style={{width: 18+'rem'}}>
                <img src={`https://image.tmdb.org/t/p/original${popularMovie.poster_path}`} className="card-img-top" alt="Filme em destaque"/>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title highlights-title-card-height">{popularMovie.title}</h5>
                  <p className="card-text">Média dos votos: {popularMovie.vote_average}</p>
                  <p className="card-text">Data de lançamento: {formatDate(popularMovie.release_date)}</p>
                  <a data-toggle="modal" data-target="#sinopseModal" onClick={() => setSinopseText(popularMovie.overview)} className="btn highlights-btn-color text-white ">Ver Sinopse</a>
                </div>
              </div>
            </div>
            ))
            }
          </div>
        </div>
      </section>
    </>
  );
}