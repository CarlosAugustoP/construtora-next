import React from 'react';
import { Wrapper, StyledImg, ContentBox, Title, Button, Colored } from './styles';

export default function Intro() {
    return (
        <Wrapper>
            <StyledImg src="img/parallax1.png" srcset = "img/hero.png 942w "alt="Parallax" />
            <ContentBox>
                <Title><Colored>O seu sonho é o nosso compromisso.</Colored></Title>
                <a href="#Contato"><Button>Entre em contato</Button></a>
            </ContentBox>
        </Wrapper>
    );
}
