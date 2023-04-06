import Cliente from "@/core/Cliente";
import Entrada from "./Entrada";
import { useState } from "react";
import Botao from "./Botao";

interface FormularioProps {
    cliente?: Cliente
}
export default function Formulario(props: FormularioProps){
    
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    return(
        <div>
            {id ? (
                <Entrada textoLabel="Id" somenteLeitura valor={id} className="mb-2" />
            ) : false}
            <Entrada textoLabel="Nome:"  valor={nome} onChange={setNome} className="mb-2"/>
            <Entrada tipoInput="number" textoLabel="Idade:"  valor={idade} onChange={setIdade} className="mb-2"/>
            <div className="flex justify-end">
                <Botao corBotao="gray" className="mr-2" >{id ? 'Alterar' : 'Salvar'}</Botao>
                <Botao corBotao="green">Cancelar</Botao>
            </div>
        </div>
    )
}