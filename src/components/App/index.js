import React, { useState, useEffect } from 'react';
import Header from '../NavBar';
import Contato from '../Contato';
import PostHeader from '../PostHeader';
import FeaturedPost from '../FeaturedPost';
import Intro from '../Intro';
import QuemSomos from '../QuemSomos';
import Footer from '../Footer';
import Test from '../NavBar/test';
import {Mobile} from '../PostHeader/mobile'; 
import { Toaster } from 'react-hot-toast';
import dynamic from 'next/dynamic';

export default function App() {

  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const NoSSRIntro = dynamic(() => import('../Intro'), { ssr: false });
  
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 942);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Toaster 
        position="bottom-right"
        reverseOrder={false}
      />
      <Header />
      <div style={{ height: '100px' }}></div>
      <NoSSRIntro />
      {isLargeScreen ? (
        <>
          <FeaturedPost />
          <PostHeader />
        </>
      ) : (
        // Replace these components with whatever you want to render instead
        <Mobile />
      )}
      <QuemSomos />
      <Contato />
      <Footer />
    </>
  );
}
