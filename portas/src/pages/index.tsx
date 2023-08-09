import styles from '../styles/Home.module.css'
import Cartao from '@/components/Cartao'
import Botao from '@/components/Botao'
import Link from 'next/link'
import EntradaNum from '@/components/EntradaNum'
import { useState } from 'react'

export default function Home() {

    const [qntPorta, setQntPorta] = useState('3');
    const [portaPresente, setPortaPresente] = useState('1');
    console.log(qntPorta)
  
    return (
        <div className={styles.home}>
            <div>
                <Cartao bgcolor='#fd0a60' fonteColor={'#fff'}>Porta Premiada</Cartao>
                <Cartao >
                    Quantidade de portas:
                    <EntradaNum childToParent={(qntPorta) => setQntPorta(qntPorta)}/>
                </Cartao>
            </div>
            <div>
                <Cartao>
                    Porta com Presente:
                    <EntradaNum childToParent={(portaPresente) => setPortaPresente(portaPresente)}/>
                </Cartao>
                <Cartao bgcolor='#b6d9c3'>
                    <Link href={`/jogo/${qntPorta}/${portaPresente}`}>
                        <Botao children='Iniciar' corBotao='white' />
                    </Link>
                </Cartao>
            </div>
        </div>

    )


}

