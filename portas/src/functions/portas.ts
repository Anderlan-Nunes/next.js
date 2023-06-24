import PortaModel from '@/model/porta';

export function criarPortas(qtde: number, portaSelecionada: number): PortaModel[]{
    return Array.from({ length: qtde }, (_,indice) => {
        const numeroDaPorta = indice + 1 // +1 pra nao usar o zero
        const temPresente = numeroDaPorta === portaSelecionada
        return new PortaModel(numeroDaPorta, temPresente)
    }) 
}

export function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[] {
    return portas.map(portaAtual => {
        const igualAModificada = portaAtual.numero === portaModificada.numero

        if(igualAModificada) {
            return portaModificada
        }else {
            // todas as portas tem que esta desselecionadas so a modificada fica selecionada
            // so não pode desselecionada casa abra ela
            return portaModificada.aberta ? portaAtual : portaAtual.desselecionar()
        }
    })
}