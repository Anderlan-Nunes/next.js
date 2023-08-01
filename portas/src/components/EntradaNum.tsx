import { useState } from "react";
import styles from "../styles/EntradaNum.module.css"
import Botao from "./Botao";


export default function EntradaNum(){

    const [num, setNum] = useState(3)
    
    return(
        <div className={styles.EntradaNum}>
            <span>{num}</span>
            <div className={styles.botoes}>
                <Botao children="+" corBotao="blue" onChange={() => setNum(num + 1)} value={num}/>
                <Botao children="-" corBotao="blue"  />
            </div>
        </div>
   )
}

