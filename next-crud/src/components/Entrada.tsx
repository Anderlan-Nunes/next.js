
interface EntradaProps {
    tipoInput?: "text" | "number"
    textoLabel: string
    valor?: any
    somenteLeitura?: boolean
    onChange?: (valor: any) => void
    className?: any

}
export default function Entrada(props: EntradaProps){
    
    return(
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2">
                {props.textoLabel}
            </label>
            <input
                type={props.tipoInput ?? "text"}
                value = {props.valor}
                readOnly = {props.somenteLeitura}
                onChange={e => props.onChange?.(e.target.value)}
                className={`
                    border border-purple-500 rounded-lg
                    focus:outline-none bg-orange-50 px-4 py-2
                   ${props.somenteLeitura ? '' : 'focus:bg-blue-100'}
                `}
            />
        </div>
    )
}