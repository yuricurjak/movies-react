import React from 'react';
import videoButton from '../../assets/video.svg';
import './index.css';

export default function Highlights() {
  return (
    <section>
      <div className="container py-4 highlights-background-color">
        <div className="text-center py-4">
          <h2 className="display-4 highlights-title-color">Destaques da Semana</h2>
        </div>
        <div className="row">
          <div className="col-md-4 d-flex justify-content-center">
            <div className="card my-2" style={{width: 18+'rem'}}>
              <img src={videoButton} className="card-img-top" alt="Filme em destaque"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <div className="card my-2" style={{width: 18+'rem'}}>
              <img src={videoButton} className="card-img-top" alt="Filme em destaque"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <div className="card my-2" style={{width: 18+'rem'}}>
              <img src={videoButton} className="card-img-top" alt="Filme em destaque"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}