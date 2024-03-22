import { Button, Colored } from './styles';

export default function Intro() {
    return (
        <div style={{ paddingBottom: '100px', position: 'relative' }}>
            <img src="img/parallax1.png" alt="Parralax" style={{ width: '100%' }} />
            <div style={{ width: '50%', color: 'black', position: 'absolute', top: '40%', left: '27%', transform: 'translate(-50%, -50%)', padding: '20px', borderRadius: '10px', backgroundColor: 'rgb(255,255,255,0.2)' }}>
                <h1 style = {{
                    fontSize: '45px',
                    width: '80%',

                }}><Colored>O seu sonho é o nosso compromisso.</Colored></h1>
                <div >
                   <a href="#Contato"><Button>Entre em contato</Button></a>
                </div>
            </div>
        </div>
    );
}
