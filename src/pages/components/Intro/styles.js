import styled from 'styled-components';

export const Container = styled.div`
    color: black;
    position: absolute; 
    top: 20px; 
    left: 20px; 
    text-align: left; 
    font-size: 30px;
    text-shadow: 2px 2px 4px #000000;
`;
export const Button = styled.button`
    background: linear-gradient(to right, black, #3A3A3A); /* Use contrasting colors for a more drastic gradient */
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
    background: linear-gradient(to right, black, grey); /* Use contrasting colors for a more drastic gradient */
    -webkit-background-clip: text; /* Clip the background to the text */
    -webkit-text-fill-color: transparent; /* Make the text transparent */
`;

