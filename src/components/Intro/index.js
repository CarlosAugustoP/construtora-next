import React from 'react';
import { Wrapper, StyledImg, ContentBox, Title, Button, Colored } from './styles';

export default function Intro() {
    return (
        <Wrapper>
            <StyledImg
                src="img/test.jpeg"
                sizes="(max-width: 942px) 100vw, 942px"
                alt="Parallax"
                loading="lazy" 
            />
            <ContentBox>
                <Title><Colored>O seu sonho é o nosso compromisso.</Colored></Title>
                <a href="#Contato"><Button>Entre em contato</Button></a>
            </ContentBox>
        </Wrapper>
    );
}
