import styled from 'styled-components';

export const Container = styled.div`
    height: 75px;
    align-items: center;
    display: flex;
    flex-direction: row;
    background-color: black;
    
`;

export const Content = styled(Container)`
    margin-right: 40px;
    font-weight: 200;
    font-style: normal;
    gap:45px;
    display: flex;
    align-items: center;
   
    @media (max-width: 942px) {
        gap: 0px;

        img {
            display: block;
        }
    }

    
`;

export const MobileContent = styled(Content)`
    font-weight: 200;
  `;  


export const SubNav = styled(Content)`

    background-color: #B0A494;
    width: 100%;
    color: black;
    font-weight: 300;
    height: 40px;
    display: flex;
    img {
        display: block;
    }
        @media (max-width: 942px) {
        justify-content: flex-start;
        
    }
`;

export const ContactLogo = styled.img`
    width: 20px;
    height: 20px;
    &:hover {
        cursor: pointer;
        transform: scale(1.2);
        animation-name: spin;
        animation-duration: 2s;
        animation-iteration-count: infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(180deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @media (max-width: 942px) {
        width:25px;
        height:25px;

        &:hover {
            animation: none;
            transform:none;
            
        }


    }
`;

export const MainLogo = styled.img`
    margin-left: 20px;
    width: 120px;
`;

export const Span = styled.span`
    color: white;
    font-weight: 200;
    font-size: 20px;

    @media (max-width: 942px) {
     display: none;
 }
    

`;
export const Nav = styled.nav`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 100;
`;
export const A = styled.a`
    text-decoration: none;
    color: white;
    &:visited {
        color: white;
    }
    &:hover {
        color: #B0A494;
        cursor: pointer;
    }
    `

export const Info = styled.p`
     @media (max-width: 942px) {
     display: none;
 }
    
`;

export const FaleConosco = styled.span`
    display: none;
    @media (max-width: 942px) {
        margin-left: 20px;
        display: block;
        font-weight: 300;
        font-size: 20px;
    }
`;

export const NavigationItem = styled.span`
    font-size: 20px;
    margin-right: 20px;
   
`;

export const TopHamburger = styled.div `
    width: 30px;
    height: 2px;
    background-color: white;

`;

export const CenterHamburger = styled.div`
    width: 30px;
    height: 2px;
    background-color: white;
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    animation-name: fadeOut;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    transition: opacity 0.3s ease-in-out;
`;

export const BottomHamburger = styled(TopHamburger) ``;