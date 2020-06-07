import React from 'react';
import './index.css';
import paris from '../../assets/paris.jpg';
import california from '../../assets/california.jpg';
import dublin from '../../assets/dublin.jpg';

export default function Carousel() {
  return (
    <div className="container">
      <div id="carouselMovies" class="carousel slide carousel-fade" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselMovies" data-slide-to="0" class="active"></li>
          <li data-target="#carouselMovies" data-slide-to="1"></li>
          <li data-target="#carouselMovies" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={paris} class="d-block w-100 max-height" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={california} class="d-block w-100 max-height" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={dublin} class="d-block w-100 max-height" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}