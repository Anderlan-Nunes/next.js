
export default class PortaModel {
    #qntPorta: number
    #temPresente: boolean
    #temMonstro: boolean
    #selecionada: boolean
    #aberta: boolean

    constructor(qntPorta: number, temPresente = false, temMonstro = false, selecionada = false, aberta = false) {
        this.#qntPorta = qntPorta
        this.#temPresente = temPresente
        this.#temMonstro = temMonstro
        this.#selecionada = selecionada
        this.#aberta = aberta
    }

    get qntPorta() {
        return this.#qntPorta
    }

    get temPresente() {
        return this.#temPresente
    }

    get temMonstro() {
        return this.#temMonstro
    }

    get selecionada() {
        return this.#selecionada
    }

    get aberta() {
        return this.#aberta
    }


    // preferido usar esses metodo que retornar um instacia desse objeto do que os set.
    desselecionar() {
        const selecionada = false
        return new PortaModel(this.qntPorta, this.temPresente, this.temMonstro, selecionada, this.aberta)        
    }

    alternarSelecao() {
        // esse metodo vai alternar o valor e vai criar uma nova porta sem mexer no valor ogininal
        const selecionada = !this.selecionada
        return new PortaModel(this.qntPorta, this.temPresente, this.temMonstro, selecionada, this.aberta)
    }

    abrir() {
        const aberta = true
        return new PortaModel(this.qntPorta, this.temPresente, this.temMonstro, this.selecionada, aberta)
    }
}

/**
 *  O fato de não ter que alterar a porta original eh muito bom pq garante para que esta usando este componente, que ele só vai evoluir o estado quando ele quiser. Se tivesse mexido na instância atual eu não teria a possibilidade de ter por exemplo uma porta somente leitura pq eu estou mexendo diretamente na instância neste caso o Onchange retorna uma nova porta, aí o fato de eu receber uma nova porta faz com que eu tenha a liberdade de chamar ou não a mudança do estado chamando esse método aki.
 * vídeo: usando o evento onchange na PORTA ele funciona como um input next 07.mp4

https://www.cod3r.com.br/courses/take/nextjs/lessons/25743627-adicionando-eventos-a-porta-02

 */