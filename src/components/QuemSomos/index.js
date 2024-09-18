import React from "react";
import { Container, ImageContainer, TextContainer, Text } from "./styles";
const firstText = "A construtora Peixoto e Vasconcelos foi formada por um casal de engenheiro e arquiteta, que juntos criaram uma empresa que realizasse os sonhos de seus clientes, entregando obras de qualidade e com um design único. Desde então, Compromisso, competência e responsabilidade são a nossa marca. "
const secondText = "Há 28 anos, conquistamos a confiança de clientes e parceiros pela qualidade de nossos projetos e pela transparência de nossa equipe. Com uma trajetória de sucesso, continuamos nossa jornada para pessoas de todo o Nordeste."
const thirdText = "Construímos com integridade, excelência e respeito, buscando sempre superar as expectativas dos nossos clientes. Nosso compromisso com a qualidade e a transparência nos guia em cada projeto, sempre com uma abordagem centrada no cliente, empenhada em construir lares perfeitos, um projeto de cada vez."
export const ContentSection = ({ imgSrc, titleText, children, direction = "row", backgroundColor= "rgb(18,18,18,0.8)", color = "white"}) => {
  return (
      <Container direction={direction} style={{ backgroundColor: backgroundColor, color: color }}>
        <TextContainer>
          <h1>{titleText}</h1>
          {/* This will render the form if children are passed to ContentSection */}
          {children}
        </TextContainer>
        <ImageContainer>
          <img src={imgSrc} alt={titleText} />
        </ImageContainer>
      </Container>
  );
};

    export default function QuemSomos() {
    return (
        <>
      <div 
      id="QuemSomos"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: '100px'
      }}>
        <ContentSection imgSrc="img/casal.jpeg" titleText="Quem Somos?" children={<Text>{firstText}</Text>} />
      </div>
       <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: '50px'
      }}>
        <ContentSection imgSrc="img/provisorio.jpeg" direction = "row-reverse" titleText="Nossa História"children={<Text>{secondText}</Text>} backgroundColor="rgb(238, 238, 238, 0.8)" color= "black"/>
      </div>
       <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: '40px'
      }}>
        <ContentSection imgSrc="img/finalimage.jpeg" titleText="Nossos Valores" children={<Text>{thirdText}</Text>} />
      </div>
      </>
    );
  }
  