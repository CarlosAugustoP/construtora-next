import { useState, useEffect } from 'react';
import { Container, Nav, MainLogo, Content, Span, A, SubNav, FaleConosco, Info, ContactLogo, MobileContent, NavigationItem, CenterHamburger } from './styles';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 942);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const ContactInfo = ({ src, alt, children }) => (
    <span style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
        <ContactLogo src={src} alt={alt} style={{ marginLeft: '20px', width: isLargeScreen ? '20px' : '25px', height: isLargeScreen ? '20px' : '25px' }} />
      {children}
    </span>
  );

  const mobileContentStyle = {
    transition: isMenuOpen ? 'all 1s ease-in-out' : 'all 0.6s ease-in-out',
    maxHeight: isMenuOpen ? '1000px' : '0', // Adjust as necessary
    overflow: 'hidden',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    height: '100px',
  };

  const topDivStyle = {
    width: '30px',
    height: '6px',
    backgroundColor: 'white',
    transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
    transition: 'transform 0.3s ease-in-out',
  };
  const middleDivStyle = {
    width: '30px',
    height: '6px',
    backgroundColor: 'white',
    opacity: isMenuOpen ? '0' : '1',
    transition: 'opacity 0.3s ease-in-out',
  };
  const bottomDivStyle = {
    width: '30px',
    height: '6px',
    backgroundColor: 'white',
    transform: isMenuOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none',
    transition: 'transform 0.3s ease-in-out',
  };

  return (
    <div>
      <header>
        <Nav>
          <Container style={{ justifyContent: 'space-between', paddingRight: '20px' }}>
            <a href="#">
              <MainLogo src="/img/mainlogo.png" alt="Logo Peixoto e Vasconcelos" />
            </a>
            {isLargeScreen ? (
              <Content>
                <Span><A href="#Empreendimentos">Empreendimentos</A></Span>
                <Span><A href="#QuemSomos">Quem Somos</A></Span>
                <Span><A href="#Contato">Contato</A></Span>
              </Content>
            ) : (
              <button onClick={toggleMenu} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px',  width: '20px', height: '20px', marginRight: '20px'}}>
                <div style={topDivStyle} />
                <div style={middleDivStyle} />
                <div style={bottomDivStyle} />
              </button>
            )}
          </Container>
          {!isLargeScreen && (
            <MobileContent style={mobileContentStyle}>
              <NavigationItem onClick = {toggleMenu}><A href="#Empreendimentos">Empreendimentos</A></NavigationItem>
              <NavigationItem onClick = {toggleMenu}><A href="#QuemSomos">Quem Somos</A></NavigationItem>
              <NavigationItem onClick = {toggleMenu}><A href="#Contato">Contato</A></NavigationItem>
            </MobileContent>
          )}
          <SubNav>
          <FaleConosco>Fale Conosco!</FaleConosco>
            <a 
              style = {{
                textDecoration: 'none',
                color: 'black'
              }}
              href="https://wa.me/5581992036473?text=Olá,%20estou%20interessado%20nos%20empreendimentos%20da%20Peixoto%20e%20Vasconcelos!"
            >
              <ContactInfo src="/img/phone-icon.svg" alt="Telefone de contato">
                <Info>+5581992036473</Info>
              </ContactInfo>
            </a>
            <a 
              style = {{
                textDecoration: 'none',
                color: 'black'
              }}
              href="#Contato"
            >
              <ContactInfo src="/img/email-icon.svg" alt="Email de contato">
                <Info>contato@peixotoevasconcelos.com</Info>
              </ContactInfo>
            </a>
            <a 
              style = {{
                textDecoration: 'none',
                color: 'black'
              }}
              href="https://www.instagram.com/construtorapeixotoevasconcelos/" target="__blank">
              <ContactInfo src="/img/instagram-icon.svg" alt="Instagram de contato">
                <Info>@peixotoevasconcelos</Info>
              </ContactInfo>
            </a>
          </SubNav>
        </Nav>
      </header>
    </div>
  );

  
}
