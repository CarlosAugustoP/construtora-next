
import React from "react"
import {posts, posts2, posts3} from './posts';
import { CarousselContainer, CarousselItem } from "./styles";

const allPosts = [...posts, ...posts2, ...posts3];
const speech = 'Acreditamos que cada obra é mais do que concreto e aço. É a realização de um sonho, onde transformamos ideias em lares.';

export const Mobile = () => {
    return (
        <>
        <div id = "Empreendimentos" style = {{ display :'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <h1 style = {{fontWeight: '200'}}>Empreendimentos</h1>
        </div> 
        <div style = {{ display :'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
            <img style = {{width: '40px', height: '40px', position: 'relative', bottom: '60px'}} src = 'img/arrow.svg' alt = 'arrow' />
            <CarousselContainer>
                {allPosts.map((post, index) => (
                    <CarousselItem key={index}>
                        <img src={post.image} alt={post.title} />
                        <strong>{post.title}</strong>
                        <div>{post.tipo} em {post.city}</div>
                        <i style = {{width: '250px'}}>{post.highlightedPhrase}</i>
                    </CarousselItem>
                ))}
            </CarousselContainer>
            <img style = {{width: '40px', height: '40px', transform: 'rotate(180deg)', position: 'relative', bottom: '60px'}} src = 'img/arrow.svg' alt = 'arrow' />
        </div>
        </>
    );
};

