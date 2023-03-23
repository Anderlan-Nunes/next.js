
import Cabecalho from '@/components/Cabecalho'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <div><Cabecalho titulo ="Home"/>
      <div className={styles.Home}>
        <h1>Início</h1>
        <Link href="/estiloso">Estiloso</Link>
      </div>
    </div>
  )

}
