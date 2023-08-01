import styles from '../styles/Home.module.css'
import Cartao from '@/components/Cartao'
import Botao from '@/components/Botao'
import Link from 'next/link'
import EntradaNum from '@/components/EntradaNum'

export default function Home() {


    return (
        <div className={styles.home}>
            <div>
                <Cartao bgcolor='#fd0a60'>Porta Premiada</Cartao>
                <Cartao>
                    <EntradaNum  />
                </Cartao>
            </div>
            <div>
                <Cartao>
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

