import React from 'react';
import Navbar from '../../components/Navbar';
import Carousel from '../../components/Carousel';
import Search from '../../components/Search';
import Highlights from '../../components/Highlights';
import Footer from '../../components/Footer';
import './index.css';

export default function Home() {
  return (
    <>
      <Navbar/>
      <Carousel/>
      <Search/>
      <Highlights/>
      <Footer/>
    </>
  );
}