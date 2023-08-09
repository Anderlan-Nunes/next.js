import styles from '../styles/Home.module.css'
import Cartao from '@/components/Cartao'
import Botao from '@/components/Botao'
import Link from 'next/link'
import EntradaNum from '@/components/EntradaNum'
import { useState } from 'react'

export default function Home() {

    const [qntPorta, setQntPorta] = useState('');
  
    const childToParent = (childdata) => {
        setQntPorta(childdata);
        console.log(qntPorta)
    }


    return (
        <div className={styles.home}>
            <span>{qntPorta}</span>
            <div>
                <Cartao bgcolor='#fd0a60' fonteColor={'#fff'}>Porta Premiada</Cartao>
                <Cartao >
                    Quantidade de portas:
                    <EntradaNum  childToParent={childToParent}/>
                </Cartao>
            </div>
            <div>
                <Cartao>
                    Porta com Presente:
                    <EntradaNum />
                </Cartao>
                <Cartao bgcolor='#b6d9c3'>
                    <Link href={`/jogo/7/3`}>
                        <Botao children='Iniciar' corBotao='white' />
                    </Link>
                </Cartao>
            </div>
        </div>

    )


}

