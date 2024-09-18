import styled from 'styled-components';

export const Wrapper = styled.div`
    padding-bottom: 50px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;


    img {
        object-fit: cover;
    }
    
    `;

export const StyledImg = styled.img`
    width: 100%;
    height: 500px;
    object-fit: cover;
    filter: grayscale(100%) brightness(0.6) contrast(0.9); /* Combined filters */
    object-position: 50% 30%;
    border: 0.1px solid white;
    @media (max-width: 942px) {
        object-position: 50% 0%;
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

    @media (max-width: 942px) {
        width: 80%;
        top: 20%;
        left: 43%;
        transform: translate(-50%, -50%);
    }
`;

export const Title = styled.h1`
    width: 70%;
    font-size: 40px;
    
    @media (max-width: 942px) {
        font-size: 18px;
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

    @media (max-width: 942px) {
        font-size: 15px;
    }
`;

export const Colored = styled.span`
    background: linear-gradient(to right, white, lightgrey);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 942px) {
        font-size: 35px;
    }
`;