import React from 'react'
import { Container, CreditsContainer } from './styles'  

export default function Footer() {
    const Credit = ({ name, link }) => {
        return (
            <CreditsContainer>
                <a style = {{gap: "5px",color:"white",textDecoration:"none", display: "flex", justifyContent:"center", alignItems: "center"}} href={link} target="_blank">
                <p>{name}</p>
                    <img src="img/linkedin.svg" alt="Linkedin" />
                </a>
            </CreditsContainer>
        )
    }
    return (
        <div style = {{marginTop:"40px",  backgroundColor: 'black', fontSize: '14px', height: '200px'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: "column"}}>
                <p style = {{textAlign: 'center', borderBottom: '1px solid white', padding: '10px'}}>©2024 Peixoto & Vasconcelos. Todos os direitos reservados.</p>
            </div>
            <p style = {{textAlign: 'center', position: 'relative', bottom: '10px'}} >Website desenvolvido por:</p>
            <Container> 
               <Credit name="Carlos Augusto" link="https://www.linkedin.com/in/carlos-augusto-vasconcelos-6472a3240/"/>    
               <Credit name="Gabriel Pires" link="https://www.linkedin.com/in/gabriel-pires-777106222/"/>
            </Container>
        </div>
    )
}
