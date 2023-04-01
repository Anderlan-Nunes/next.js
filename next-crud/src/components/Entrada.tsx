
interface EntradaProps {
    tipoInput?: "text" | "number"
    textoLabel: string
    valor: any
    somenteLeitura?: boolean

}
export default function Entrada(props: EntradaProps){
    
    return(
        <div className="flex flex-col">
            <label className="mb-4">
                {props.textoLabel}
            </label>
            <input
                type={props.tipoInput ?? "text"}
                value = {props.valor}
                readOnly = {props.somenteLeitura}
                className={`
                    border border-purple-500 rounded-lg
                    focus:outline-none bg-orange-50 px-4 py-2
                   ${props.somenteLeitura ? '' : 'focus:bg-blue-100'}
                `}
            />
        </div>
    )
}