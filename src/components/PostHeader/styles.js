import styled, {css} from 'styled-components';

export const Container = styled.div`
    height: 310px;
    width:70%;
    display:flex;
    justify-content: center;
    align-items: center;
`;

export const PostDescription = styled.div`
    height: 100%;
    width: 100%;
    
`;

export const ImageContainer = styled(PostDescription)`    
    img {
        background-color: #fff;
        color: #575757;
        height: 100%;
        border-radius: 25px;
        box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.25);

    }
`;

export const PostContainer = styled(ImageContainer)`
    width: 100%;
    height: 100%;
    img {
        background-color: #fff;
        color: #575757;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const LeftArrow = styled.img`
    cursor: pointer;
    height: 50px;
`;

export const RightArrow = styled(LeftArrow)`
  transform: rotate(180deg);
`;

export const ScrollingContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
    transition: transform 0.5s ease;
`;

export const BigImageContainer = styled(ImageContainer)`  
    &:hover img {
        opacity: 1.0;
        cursor: default; 
    }
`;

export const CarousselContainer = styled.div`
    display: flex;
    overflow-x: auto; /* Habilita rolagem horizontal */
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch; /* Melhora a rolagem em dispositivos touch */
    scroll-padding-left: 24px; /* Ajusta o início da rolagem se necessário */
    width: 100vw; /* Certifica que o contêiner não seja mais largo que a viewport */
    margin: 0 auto; /* Centraliza o contêiner se não ocupar toda a largura */
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        display: none; /* Esconde a barra de rolagem */
    }
`;

export const CarousselItem = styled.div`
    scroll-snap-align: start;
    flex: 0 0 auto; /* Impede que o item do carrossel se expanda ou encolha */
    width: 100vw; /* Define a largura de cada item do carrossel para a largura da viewport */
    height: auto; /* Altura automática para se ajustar ao conteúdo */
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    position: relative; /* Posicionamento relativo para o conteúdo interno */
    img {
        width: 80%; /* Faz a imagem preencher a largura do item */
        height: auto; /* Mantém a proporção da imagem ajustando a altura automaticamente */
        object-fit: cover; /* Garante que a imagem cubra o espaço disponível sem distorção */
        border-radius: 25px;
        box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.25);
        margin-bottom: 16px;
    }
    > div {
        margin-top: 2px;
    }
`;



