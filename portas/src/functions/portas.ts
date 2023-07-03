import PortaModel from '@/model/porta';

export function criarPortas(qtde: number, portaPresente: number, portaMonstro: number[]): PortaModel[]{
    return Array.from({ length: qtde }, (_,indice) => {
        const numeroDaPorta = indice + 1 // +1 pra nao usar o zero
        const temPresente = numeroDaPorta === portaPresente
        const temMonstro = portaMonstro.includes(numeroDaPorta)
        console.log(portaMonstro[indice])
        console.log(temMonstro)
        return new PortaModel(numeroDaPorta, temPresente, temMonstro)
    }) 
}

export function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[] {
    return portas.map(portaAtual => {
        const igualAModificada = portaAtual.qntPorta === portaModificada.qntPorta

        if(igualAModificada) {
            return portaModificada
        }else {
            // todas as portas tem que esta desselecionadas so a modificada fica selecionada
            // so não pode desselecionada casa abra ela
            return portaModificada.aberta ? portaAtual : portaAtual.desselecionar()
        }
    })
}

/**
 * function criarPortas(numeroDePortas) {
    var portas = [];
    for (var i = 1; i <= numeroDePortas; i++) {
      portas.push('Porta ' + i);
    }
    return portas;
  }
 */