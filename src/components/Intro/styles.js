import styled from 'styled-components';

export const Wrapper = styled.div`
    padding-bottom: 50px;
    position: relative;
    
    `;

export const StyledImg = styled.img`
    width: 100%;
   /* Increase the spread value to make the box shadow more noticeable */

    @media (max-width: 942px) {
        height: 600px;
        object-fit: cover;
        border-radius: 15px;
        box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.25);
    }
`;

export const ContentBox = styled.div`
    width: 50%;
    color: black;
    position: absolute;
    top: 40%;
    left: 27%;
    transform: translate(-50%, -50%);
    padding: 20px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.2);

    @media (max-width: 942px) {
        width: 80%;
        top: 20%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

export const Title = styled.h1`
    width: 80%;
    font-size: 40px;
    
    @media (max-width: 942px) {
        font-size: 40px;
        line-height: 1.0;
    }
`;

export const Button = styled.button`
    background: linear-gradient(to right, black, #3A3A3A);
    color: white;
    font-size: 20px;
    padding: 10px;
    border-radius: 10px;
    border: none;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        background: linear-gradient(to right, white, lightgrey);
        color: black;
    }
`;

export const Colored = styled.span`
    background: linear-gradient(to right, black, grey);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (max-width: 942px) {
        font-size: 35px;

    }
`;
