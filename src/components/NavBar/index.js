import { useState, useEffect } from 'react';
import { Container, Nav, MainLogo, Content, Span, A, SubNav, FaleConosco, Info, ContactLogo} from './styles';



export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 942);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const ContactInfo = ({ src, alt, children }) => (
    <span style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
      <ContactLogo src={src} alt={alt} style={{ marginLeft: '20px', width: isLargeScreen ? '20px' : '25px', height: isLargeScreen ? '20px' : '25px' }} />
      {children}
    </span>
  );

  // Adjusted styles for Content component based on isMenuOpen and isLargeScreen
  const contentStyle = isLargeScreen ? {} : {
    transition: 'all 0.5s ease-in-out',
    transform: isMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
    opacity: isMenuOpen ? 1 : 0,
    display: 'flex',
    flexDirection: 'column', // Stack the links vertically
    alignItems: 'center', // Center-align the links for better presentation
    maxHeight: isMenuOpen ? '1000px' : '0', // Use maxHeight for animation
    overflow: 'hidden',
    width: '100%'
  };

  return (
    <div>
      <header>
        <Nav>
          <Container style={{ justifyContent: 'space-between', paddingRight:'20px'}}>
            <MainLogo src="/img/mainlogo.png" alt="Logo Peixoto e Vasconcelos" />
            {isLargeScreen ? (
              <>
                <Content>
                  <Span><A href="#Empreendimentos">Empreendimentos</A></Span>
                  <Span><A href="#QuemSomos">Quem Somos</A></Span>
                  <Span><A href="#Contato">Contato</A></Span>
                </Content>
              </>
            ) : (
              <img onClick={toggleMenu} style={{ width: '40px', height: '40px', cursor: 'pointer' }} src="/img/Hamburger.svg" alt="Menu" />
            )}
          </Container>
          {!isLargeScreen && (
            <Content style={contentStyle}>
              <Span><A href="#Empreendimentos">Empreendimentos</A></Span>
              <Span><A href="#QuemSomos">Quem Somos</A></Span>
              <Span><A href="#Contato">Contato</A></Span>
            </Content>
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
