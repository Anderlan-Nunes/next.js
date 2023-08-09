import { useState } from "react";
import styles from "../styles/EntradaNum.module.css"
import Botao from "./Botao";


export default function EntradaNum(props){

    const [num, setNum] = useState(3)
    
    return(
        <div className={styles.EntradaNum}>
            <span onChange={() => props.childToParent(num)}>{num}</span>
            <div className={styles.botoes}>
                <Botao children="+" corBotao="blue" onChange={() => setNum(num + 1)}/>
                <Botao children="-" corBotao="blue" onChange={() => setNum(num - 1)}/>
            </div>
        </div>
   )
}

