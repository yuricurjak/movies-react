import React from 'react';
import videoButton from '../../assets/video.svg';
import './index.css';

export default function Search() {
  return (
    <section>
      <div className="container search-background-color">
        <div className="row py-4 justify-content-center">
          <div className="col-md-6">
            <form action="">
              <div className="input-group">
                <input type="text" className="form-control search-background-color search-placeholder-color" placeholder="Buscar por filmes" aria-label="Buscar por filmes" aria-describedby="Buscar por filmes"/>
                <div className="input-group-append">
                  <button class="btn search-btn-color d-flex" type="button">
                    <img className="search-max align-self-center" src={videoButton} alt="Pesquisar"/>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row text-center my-2">
          <div className="col-xl-3 col-md-6 text-white">
            <div className="search-img-movies d-flex justify-content-center">
              <img className="h-100 w-100" src={videoButton} alt="Passaport"/>
            </div>
            <h3 className="my-3">Titulo do filme</h3>
            <p>Detalhes Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
            nemo nulla.</p>
          </div>
          <div className="col-xl-3 col-md-6 text-white">
            <div className="search-img-movies d-flex justify-content-center">
              <img className="h-100 w-100" src={videoButton} alt="Passaport"/>
            </div>
            <h3 className="my-3">Titulo do filme</h3>
            <p>Detalhes Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
            nemo nulla.</p>
          </div>
          <div className="col-xl-3 col-md-6 text-white">
            <div className="search-img-movies d-flex justify-content-center">
              <img className="h-100 w-100" src={videoButton} alt="Passaport"/>
            </div>
            <h3 className="my-3">Titulo do filme</h3>
            <p>Detalhes Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
            nemo nulla.</p>
          </div>
          <div className="col-xl-3 col-md-6 text-white">
            <div className="search-img-movies d-flex justify-content-center">
              <img className="h-100 w-100" src={videoButton} alt="Passaport"/>
            </div>
            <h3 className="my-3">Titulo do filme</h3>
            <p>Detalhes Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
            nemo nulla.</p>
          </div>
        </div>
      </div>
    </section>
  );
}