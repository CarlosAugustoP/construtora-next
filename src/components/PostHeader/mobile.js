import React, { useState, useRef } from "react";
import styled from 'styled-components';
import { posts, posts2, posts3 } from './posts';
import { CarousselContainer, CarousselItem } from "./styles";

const allPosts = [...posts, ...posts2, ...posts3];

export const Mobile = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carousselRef = useRef(null);

    const scrollCaroussel = (direction) => {
        if (carousselRef.current) {
            const width = carousselRef.current.clientWidth;
            if (direction === 'left') {
                carousselRef.current.scrollLeft -= width;
                setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : allPosts.length - 1);
            } else {
                carousselRef.current.scrollLeft += width;
                setCurrentIndex(currentIndex < allPosts.length - 1 ? currentIndex + 1 : 0);
            }
        }
    };

    return (
        <>
            <div id="Empreendimentos" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <h1 style={{ fontWeight: '200' }}>Empreendimentos</h1>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                <img 
                    style={{ width: '40px', height: '40px', position: 'relative', bottom: '60px', cursor: 'pointer' }} 
                    src='img/arrow.svg' 
                    alt='arrow' 
                    onClick={() => scrollCaroussel('left')}
                />
                <CarousselContainer ref={carousselRef}>
                    {allPosts.map((post, index) => (
                        <CarousselItem key={index}>
                            <img src={post.image} alt={post.title} />
                            <strong>{post.title}</strong>
                            <div>{post.tipo} em {post.city}</div>
                            <i style={{ width: '250px' }}>{post.highlightedPhrase}</i>
                        </CarousselItem>
                    ))}
                </CarousselContainer>
                <img 
                    style={{ width: '40px', height: '40px', transform: 'rotate(180deg)', position: 'relative', bottom: '60px', cursor: 'pointer' }} 
                    src='img/arrow.svg' 
                    alt='arrow' 
                    onClick={() => scrollCaroussel('right')}
                />
            </div>
        </>
    );
};