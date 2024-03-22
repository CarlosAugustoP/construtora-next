import React from 'react'
import { Container, CreditsContainer } from './styles'  
import Linkedin from '../../../../public/img/linkedin.svg'  

export default function Footer() {
    const Credit = ({ name, link }) => {
        return (
            <CreditsContainer>
                <a style = {{gap: "5px",color:"white",textDecoration:"none", display: "flex", justifyContent:"center", alignItems: "center"}} href={link} target="_blank">
                <p>{name}</p>
                    <img src={Linkedin} alt="Linkedin" />
                </a>
            </CreditsContainer>
        )
    }
    return (
        <div style = {{marginTop:"40px", fontFamily: "Arial"}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: "column"}}>
                <p>©2024 PEIXOTO & VASCONCELOS. TODOS OS DIREITOS RESERVADOS.</p>
            </div>
            <Container>
                Website desenvolvido por:
               <Credit name="Carlos Augusto" link="https://www.linkedin.com/in/carlos-augusto-vasconcelos-6472a3240/"/>    
               <Credit name="Gabriel Pires" link="https://www.linkedin.com/in/gabriel-pires-777106222/"/>
            </Container>
        </div>
    )
}
