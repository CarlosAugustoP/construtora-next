import React, { useState } from 'react';
import { PostContainer, LeftArrow, RightArrow, ScrollingContent } from './styles';
import { posts, posts2, posts3} from './posts';
import { animated, useSpring } from 'react-spring';
import { useEffect } from 'react';

export const AnimatedText = ({ children }) => {  
  const [animationProps, setAnimationProps] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 700 },
  }));

  useEffect(() => {
    setAnimationProps({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { duration: 700},
    });
  }, [children, setAnimationProps]);
  
  return (
    <animated.p style={{ ...animationProps, 
      fontWeight: '300',
      fontSize: '15px',
      display:'flex',
      alignItems: 'center',
      flexDirection: 'column'

     }}>
      {children}
    </animated.p>
  );
};

const AnimatedImage = ({ post, side }) => {
  const [isHovered, setIsHovered] = useState(false);

  const title = post.title;
  const city = post.localização;
  const rooms = post.rooms;
  const highlightedPhrase = post.highlightedPhrase;

  const src = post.image;

  const animationPropsRight = useSpring({
    from: { opacity: 0, transform: 'translateX(-40%)' },
    to: { opacity: 1, transform: 'translateX(0%)' },
    config: { duration: 600 },
  });

  const animationPropsLeft = useSpring({
    from: { opacity: 0, transform: 'translateX(40%)' },
    to: { opacity: 1, transform: 'translateX(0%)' },
    config: { duration: 600 },
  });

  let animationProps;

  if (side === 0) {
    animationProps = animationPropsRight;
  } else {
    animationProps = animationPropsLeft;
  }

  return (
    <div 
      style={{ 
        position: 'relative', 
        width: '100%', 
        height: '100%',
      }}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <animated.img 
        style={{ ...animationProps, width: '100%', height: '100%' }} 
        src={src} 
        alt="Post"
      />
      {isHovered && (
        <animated.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: '16px',
            background: 'rgba(0, 0, 0, 0.6)',
            cursor: 'pointer',
            borderRadius: '25px',
          }}
        >
    <div style={{ maxWidth: '80%', textAlign: 'center' }}>
    <AnimatedText style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}>{title}</AnimatedText>
    <AnimatedText style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}>{city}</AnimatedText>
    <AnimatedText style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}>{rooms}</AnimatedText>
    <AnimatedText style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}>{highlightedPhrase}</AnimatedText>
  </div>
        </animated.div>
      )}
    </div>
  );
};

export default function PostHeader(props){
  // PostGrid is a component that receives an array of posts as props and renders them in a grid
  const PostGrid = ({ posts, side }) => {
    return (
      <div style = {{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 270px)',
        gridAutoRows: '270px',
        gap: '40px',
        width: '80%',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        {posts.map((post, index) => (
          <PostContainer key={index}>
            <AnimatedImage post={post} side={side}/>
          </PostContainer>
        ))}
      </div>
    );
  };
  
  // current grid starts as 1, and can be defined to assume other values with setCurrentGrid
  const [currentGrid, setCurrentGrid] = useState(1);

  // side is used to determine the direction of the animation (0 for left, 1 for right)
  const [side, setSide] = useState(0);

  // If the user is in currentGrid 1, posts1 will be rendered and so on.
  const getPostsForGrid = () => {
    if (currentGrid === 1) {
      return posts;
    } else if (currentGrid === 2) {
      return posts2;
    } else {  
      return posts3; 
    }
  };

  // When the user clicks the left arrow, the current grid is set to the previous grid
  const handlePreviousGrid = () => {
    setCurrentGrid((prevGrid) => (prevGrid === 1 ? 3 : prevGrid - 1));
    setSide(0);
  };

  // When the user clicks the right arrow, the current grid is set to the next grid
  const handleNextGrid = () => {
    setCurrentGrid((prevGrid) => (prevGrid === 3 ? 1 : prevGrid + 1));
    setSide(1);
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '100px',
          gap: '20px',
        }}
      >
        <LeftArrow onClick={handlePreviousGrid} src="img/arrow.svg" />
        <ScrollingContent>
          <PostGrid posts={getPostsForGrid()} side={side}/>
        </ScrollingContent>
        <RightArrow onClick={handleNextGrid} src="img/arrow.svg" />
      </div>
    </>
  );
}

