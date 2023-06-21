import PortaModel from '../model/porta'
import Portas from '../components/Portas'
import { useState } from 'react'
// import Presente from '../components/Presente'

export default function Home() {
  const [porta, setPorta] = useState(new PortaModel(1))
  const [texto, setTexto] = useState('...')
  return (
    <div style={{display:"flex", flexDirection: "column"}}>
      <input type="text" value={texto}
        onChange={e => setTexto(e.target.value)}/>
      <Portas value={porta} />
      <Portas value={new PortaModel(2,false,true)}/>
      {/* <Presente /> */}
    </div>
  )
}
