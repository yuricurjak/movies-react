import React from 'react';
import Sidebar from '../../components/Sidebar';
import Carousel from '../../components/Carousel';
import Search from '../../components/Search';
import Highlights from '../../components/Highlights';
import Footer from '../../components/Footer';
import './index.css';

export default function Home() {
  return (
    <>
      <Sidebar/>
      <Carousel/>
      <Search/>
      <Highlights/>
      <Footer/>
    </>
  );
}