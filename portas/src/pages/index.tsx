import PortaModel from '../model/porta'
import Portas from '../components/Portas'
import { useState } from 'react'

export default function Home() {
  const [porta, setPorta] = useState(new PortaModel(1))
  // const [texto, setTexto] = useState('...')
  return (
    <div style={{display:"flex"}}>
      {/* <input type="text" value={texto}
        onChange={e => setTexto(e.target.value)}/> */}
        <Portas value={porta} onChange={novaPorta => setPorta(novaPorta)}/>
  
    </div>
  )
}

//<Portas value={porta} onChange={novaPorta => console.log(novaPorta)} />

/* vídeo: usando o evento onchange na PORTA ele funciona como um input next 07.mp4

https://www.cod3r.com.br/courses/take/nextjs/lessons/25743627-adicionando-eventos-a-porta-02

 */