import styles from '../styles/Home.module.css'
import Portas from '../components/Portas'
import { useState } from 'react'
import { atualizarPortas, criarPortas } from '@/functions/portas'
import Tabelas from '@/components/Tabela'
import Cartao from '@/components/Cartao'
import Botao from '@/components/Botao'
import Link from 'next/link'

export default function Home() {


    return (
        <div className={styles.home}>
            <div>
                <Cartao bgcolor='#fd0a60'>Porta Premiada</Cartao>
                <Cartao></Cartao>
            </div>
            <div>
                <Cartao></Cartao>
                <Cartao bgcolor='#b6d9c3'>
                    <Link href={`/jogo/7/3`}>
                        <Botao children='Iniciar' corBotao='white' />
                    </Link>
                </Cartao>
            </div>
        </div>

    )


}

