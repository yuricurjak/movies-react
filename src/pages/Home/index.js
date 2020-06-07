import React from 'react';
import Sidebar from '../../components/Sidebar';
import Carousel from '../../components/Carousel'
import Search from '../../components/Search'
import './index.css';

export default function Home() {
  return (
    <>
      <Sidebar/>
      <Carousel/>
      <Search/>
    </>
  );
}