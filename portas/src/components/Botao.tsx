import styles from '../styles/Botao.module.css'
import { CSSProperties  } from 'react'

interface BotaoProps {
    children : any
    corBotao? : 'green' |'blue' | 'gray' | 'red' | 'white'
    style?: CSSProperties
    onClick?: () => void
}
export default function Botao (props: BotaoProps) {

    const corBotao = props.corBotao ?? 'white'

    return (
        <button className={styles.botao}
            onClick={props.onClick}
            style={props.style}
        >{props.children}</button>
    )
}