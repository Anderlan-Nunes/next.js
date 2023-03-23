import Link from "next/link"
import styles from '@/styles/Cabecalho.module.css'

export default function Cabecalho(props:any){
    console.log(props)
    return(
        <div className={styles.Cabecalho}>
            <h1>{props.titulo}</h1>
            <Link href="/" >Voltar</Link>
            
        </div>
    )
}