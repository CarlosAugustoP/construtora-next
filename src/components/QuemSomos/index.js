import React from "react";
import { Container, ImageContainer, TextContainer, Text } from "./styles";
const lorem ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ultricies mi. Sed erat lorem, porttitor eu mauris vitae, condimentum vulputate sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis pretium ipsum nec dui fringilla, quis interdum tellus tristique. Mauris porttitor sapien quam, s. Cras et purus purus "
const firstText = "A construtora Peixoto e Vasconcelos foi formada por um casal de engenheiro e arquiteta, que juntos, decidiram unir suas habilidades e conhecimentos para criar uma empresa que fosse capaz de realizar os sonhos de seus clientes, entregando obras de qualidade e com um design único. Desde então, Compromisso, competência e responsabilidade são a nossa marca. "
const secondText = "Desde sua fundação em 1997, a Peixoto & Vasconcelos tem trilhado um caminho marcado por conquistas e dedicação ao seu propósito de construir com excelência. Ao longo dos anos, conquistamos a confiança de clientes e parceiros pela qualidade de nossos projetos e pela transparência de nossa equipe. Com uma trajetória de sucesso, continuamos nossa jornada para pessoas de todo o Nordeste."
const thirdText = "Na Peixoto & Vasconcelos, construímos com integridade, excelência e respeito, buscando sempre superar as expectativas dos nossos clientes. Nosso compromisso com a qualidade e a transparência nos guia em cada projeto, sempre com uma abordagem centrada no cliente e uma equipe dedicada, empenhada em construir lares perfeitos, um projeto de cada vez."
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
        <ContentSection imgSrc="img/QuemSomosPhoto1.jpg" titleText="Quem Somos?" children={<Text>{firstText}</Text>} />
      </div>
       <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: '50px'
      }}>
        <ContentSection imgSrc="img/QuemSomosPhoto1.jpg" direction = "row-reverse" titleText="Nossa História"children={<Text>{secondText}</Text>} backgroundColor="rgb(238, 238, 238, 0.8)" color= "black"/>
      </div>
       <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: '40px'
      }}>
        <ContentSection imgSrc="img/QuemSomosPhoto1.jpg" titleText="Nossos Valores" children={<Text>{thirdText}</Text>} />
      </div>
      </>
    );
  }
  