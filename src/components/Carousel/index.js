import React from 'react';
import './index.css';
import paris from '../../assets/paris.jpg';
import california from '../../assets/california.jpg';
import dublin from '../../assets/dublin.jpg';

export default function Carousel() {
  return (
    <section>
      <div className="container p-0">
        <div id="carouselMovies" className="carousel slide carousel-fade" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselMovies" data-slide-to="0" className="active"></li>
            <li data-target="#carouselMovies" data-slide-to="1"></li>
            <li data-target="#carouselMovies" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={paris} className="d-block w-100 carousel-max-height" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={california} className="d-block w-100 carousel-max-height" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={dublin} className="d-block w-100 carousel-max-height" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}