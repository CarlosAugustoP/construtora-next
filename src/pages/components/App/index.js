import React from 'react';
import Header from '../NavBar';
import Contato from '../Contato';
import PostHeader from '../PostHeader';
import FeaturedPost from '../FeaturedPost';
import Intro from '../Intro';
import QuemSomos  from '../QuemSomos';

import Footer from '../Footer';
export default function App(){

  return (
    <>
        <Header />
        <div style={{height: '100px'}}></div>
        <Intro/>
        <FeaturedPost />
        <PostHeader />
        <QuemSomos/>
        <Contato/>
        <Footer />
      </>
  );
}
