import React, { useState, useEffect } from 'react';
import { Container, PostDescription, BigImageContainer } from './styles';
const speech = ' Na construtora Peixoto e Vasconcelos, acreditamos que cada obra é mais do que concreto e aço. É a realização de um sonho, onde transformamos ideias em lares.';
import {highlightedPosts} from  '../PostHeader/posts' ;
import { animated, useSpring } from 'react-spring';

const AnimatedImage = ({ src }) => {
  const [animationProps, setAnimationProps] = useSpring(() => ({
    from: { opacity: 0, transform: 'translateX(20%)' },
    to: { opacity: 1, transform: 'translateX(0%)' },
    config: { duration: 1000 },
  }));
  
  useEffect(() => {
    setAnimationProps({
      from: { opacity: 0, transform: 'translateX(20%)' },
      to: { opacity: 1, transform: 'translateX(0%)' },
      config: { duration: 1000 },
    });
  }, [src, setAnimationProps]);

  return (
    <animated.img 
      style={{ ...animationProps, width: '90%', height: '100%' }} 
      src={src} 
      alt="Post"
    />
  );
};

 export const AnimatedText = ({ children }) => {  
  const [animationProps, setAnimationProps] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  }));

  useEffect(() => {
    setAnimationProps({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { duration: 1000},
    });
  }, [children, setAnimationProps]);
  
  return (
    <animated.p style={{ ...animationProps, 
      direction: 'rtl',
      fontWeight: '200',
      fontSize: '18px',
      paddingLeft:'12%',
      height: '66%',

     }}>
      {children}
    </animated.p>
  );
};


export default function FeaturedPost() {

  const [currentPost, setCurrentPost] = useState(1);

  useEffect(() => {
    const timer = setInterval(handleNextPost, 8000);
    return () => clearInterval(timer);
  }, []);

  const getCurrentPost = () => {
    return highlightedPosts[currentPost - 1];
  };
  // When the user clicks the right arrow, the current grid is set to the next grid
  const handleNextPost = () => {
    setCurrentPost((prevPost) => (prevPost=== 3 ? 1 : prevPost+ 1));
  };

  const post = getCurrentPost();

  return (
    <div
      id = "Empreendimentos"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
      }}
    >
      <Container>
        <PostDescription>
          <p style={{
            paddingLeft:'10%',
            height: '33%',
            fontSize: '20px',
            fontWeight: '200',
          }}>{speech}</p>
          <br></br>
          <AnimatedText>
            <strong>{post.type}</strong> em <strong>{post.district}</strong>
            <br />
            {post.city}
            <br />
            <i>{post.description}</i>
          </AnimatedText>
        </PostDescription>
        <BigImageContainer>
          <AnimatedImage style = {{width: '400px'}} src={post.image} alt="Post Image" />
        </BigImageContainer>
      </Container>
    </div>
  );
}

