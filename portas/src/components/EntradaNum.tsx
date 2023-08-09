import { useEffect, useState } from "react";
import styles from "../styles/EntradaNum.module.css"
import Botao from "./Botao";

export default function EntradaNum({childToParent}){

    const [num, setNum] = useState(3)

    useEffect(() => {
        childToParent(num);    
    }, [num]);


    return(
        <div className={styles.EntradaNum}>
            <span >{num}</span>
            <div className={styles.botoes}>
                <Botao children="+" corBotao="blue" onChange={() => setNum(num + 1)}/>
                <Botao children="-" corBotao="blue" onChange={() => setNum(num - 1)}/>
            </div>
        </div>
   )
}

