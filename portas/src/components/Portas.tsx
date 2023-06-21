import styles from '../styles/Portas.module.css'
import PortaModel from '../model/porta'

interface PortaProps {
    value: PortaModel 

}

export default function Portas(props: PortaProps) {

    const porta= props.value

    const selecionada = porta.selecionada ? styles.selecionada : ''

    return (
        <div className={styles.area}>
            <div className={`${styles.estrutura} ${selecionada} `}>
                <div className={styles.portas}>
                    <div className={styles.numero}>{porta.numero}</div>
                    <div className={styles.macaneta}></div>
                </div>
            </div>
            <div className={styles.chao}></div>
        </div>
    )
}