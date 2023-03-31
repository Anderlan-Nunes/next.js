
interface BotaoProps  {
    children: any
    corBotao?: 'green' |'blue' | 'gray'
    className?: string
}
export default function Botao (props: BotaoProps){

    const corBotao = props.corBotao ?? 'gray' //caso nao esteja setado setar com gray
    return(
        <button className={`
            bg-gradient-to-r from-${corBotao}-400 to-${corBotao}-700
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}
        >
            {props.children}
        </button>
    )
}