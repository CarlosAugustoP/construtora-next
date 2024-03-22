import styled from 'styled-components';

export const Container = styled.div`
    height: 400px;
    width:80%;
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
`;

export const PostDescription = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 50%;
`;

export const ImageContainer = styled(PostDescription)`    
    img {
        background-color: #fff;
        color: #575757;
        height: 100%;
        object-fit: cover;
        box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.25);
        transition: opacity 0.5s ease; 
        border-radius: 25px;

    }
    
    &:hover {
        img {
            cursor: pointer;
            opacity: 0.2;
        }
    }
    
    &:hover img {
        opacity: 0.2; 
    }
`;

export const BigImageContainer = styled(ImageContainer)`  
display: flex;
flex-direction: row;
align-items: center;
gap:5px;

    &:hover img {
        opacity: 1.0;
        cursor: default; 
    }
    svg {
        height: 40px;
        width: 40px;
        
    }
`;
