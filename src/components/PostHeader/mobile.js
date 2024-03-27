
import React from "react"
import {posts, posts2, posts3} from './posts';
import { CarousselContainer, CarousselItem } from "./styles";

const allPosts = [...posts, ...posts2, ...posts3];

export const Mobile = () => {
    return (
        <div>
            <CarousselContainer>
                {allPosts.map((post, index) => (
                    <CarousselItem key={index}>
                        <img src={post.image} alt={post.title} />
                        <strong>{post.title}</strong>
                        <div>{post.tipo} em {post.city}</div>
                        <i>{post.highlightedPhrase}</i>
                    </CarousselItem>
                ))}
            </CarousselContainer>
        </div>
    );
};

