
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
                    </CarousselItem>
                ))}
            </CarousselContainer>
        </div>
    );
};

