import styles from '../styles/Home.module.css'
import Cartao from '@/components/Cartao'
import Botao from '@/components/Botao'
import Link from 'next/link'

export default function Home() {


    return (
        <div className={styles.home}>
            <div>
                <Cartao bgcolor='#fd0a60'>Porta Premiada</Cartao>
                <Cartao>1</Cartao>
            </div>
            <div>
                <Cartao>2</Cartao>
                <Cartao bgcolor='#b6d9c3'>
                    <Link href={`/jogo/7/3`}>
                        <Botao children='Iniciar' corBotao='white' />
                    </Link>
                </Cartao>
            </div>
        </div>

    )


}

