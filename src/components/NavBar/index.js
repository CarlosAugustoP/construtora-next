import { Container, Content, SubNav, ContactLogo, MainLogo, Span, Nav, A } from './styles';

const ContactInfo = ({ src, alt, children }) => (
  <span
    style={{
      display: 'flex',
      gap: '5px',
      alignItems: 'center'
    }}
  >
    <ContactLogo src={src} alt={alt} style={{ marginLeft: '20px' }} />
    {children}
  </span>
);

export default function Header({ scrollToSection }) {
  return (
    <div>
      <header>
        <Nav>
          <Container
            style={{
              justifyContent: 'space-between',
            }}
          >
            <MainLogo src="/img/mainlogo.png" alt="Logo Peixoto e Vasconcelos"></MainLogo>
            <Content>
            <Span><A href="#Empreendimentos">Empreendimentos</A></Span>
            <Span><A href="#QuemSomos">Quem Somos</A></Span>
            <Span><A href ="#Contato">Contato</A></Span>
            </Content>
          </Container>
          <SubNav>
            <a 
              style = {{
                textDecoration: 'none',
                color: 'black'
              }}
              href="https://wa.me/5581992036473?text=Olá,%20estou%20interessado%20nos%20empreendimentos%20da%20Peixoto%20e%20Vasconcelos!"
            >
              <ContactInfo src="/img/phone-icon.svg" alt="Telefone de contato">
                +5581992036473
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
                contato@peixotoevasconcelos.com
              </ContactInfo>
            </a>
            <a 
              style = {{
                textDecoration: 'none',
                color: 'black'
              }}
              href="https://www.instagram.com/construtorapeixotoevasconcelos/" target="__blank">
              <ContactInfo src="/img/instagram-icon.svg" alt="Instagram de contato">
                @peixotoevasconcelos
              </ContactInfo>
            </a>
          </SubNav>
        </Nav>
      </header>
    </div>
  );
}
