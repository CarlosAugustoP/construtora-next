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
`;

export const SubNav = styled(Content)`
    background-color: #B0A494;
    width: 100%;
    color: black;
    font-weight: 300;
    height: 40px;
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
`;

export const MainLogo = styled.img`
    margin-left: 20px;
    width: 60px;
    height: 60px;
`;

export const Span = styled.span`
    color: white;
    font-weight: 200;
    font-size: 20px;
    
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
