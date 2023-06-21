import styles from '../styles/Portas.module.css'
import PortaModel from '../model/porta'

interface PortaProps {
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void // eu vou conseguir passar um parametro para quem me chamou

}

export default function Portas(props: PortaProps) {

    const porta= props.value
    const selecionada = porta.selecionada ? styles.selecionada : ''

    const alternarSelecao = (e: any) => props.onChange(porta.alternarSelecao()) //31

    return (
        <div className={styles.area} onClick={alternarSelecao}>
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

/**
 * 31 passando um nova porta com a selecao alternada. Ja fiz isso dentro da classe q tem uma funcao q alterna o valor
 * // esse metodo vai alternar o valor e vai criar uma nova porta sem mexer no valor ogininal
 * esse valor original aki const porta= props.value continua o mesmo
 * props.onChange(porta.alternarSelecao()) aki ele vai gerar uma nova porta com o valor de selecionado alterado
 */