import styles from '../styles/Cartao.module.css'
interface CartaoProps {
    bgcolor? : any
    children?: any
    fonteColor?: any
}
export default function Cartao(props: CartaoProps){

    return (
        <div className={styles.cartao}
            style={{backgroundColor: props.bgcolor ?? '#fff'}}>
            <div
                style={{color: props.fonteColor ?? '#000'}}>
                {props.children}
            </div>
        </div>
    )
}