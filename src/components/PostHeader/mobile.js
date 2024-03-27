
import React from "react"
import {posts} from './posts';
import { CarousselContainer, CarousselItem } from "./styles";

export const Mobile = () => {
    return (
        <div>
            <CarousselContainer>
                {posts.map((post, index) => (
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

