import ColecaoCliente from "@/backend/db/ColecaoCliente"
import Cliente from "@/core/Cliente"
import ClienteRepositorio from "@/core/ClienteRepositorio"
import { useEffect, useState } from "react"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente()

    const { tabelaVisivel, exibirFormulario, exibirTabela} = useTabelaOuForm()

    const [clientes, setClientes] = useState<Cliente[]>([])
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio()) // 1
    

    // const clientes = [
    //   new Cliente("Tsunade", 37, "1"),
    //   new Cliente("Shika", 39, "2"),
    //   new Cliente("Hinata", 9, "3"),
    //   new Cliente("Goku", 37, "4"),
    // ]

    // vou usar para alterar o stado na inicializacao do componente
    useEffect(obterTodos, [])

    function obterTodos() {
        repo.obterTodos().then(clientes => {
            setClientes(clientes)
            exibirTabela()
        })

    }

    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente)
        console.log(cliente.nome)
        exibirFormulario()
    }

    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()
        console.log(`Excluir ${cliente.nome}`)
    }

    function novoCliente() {
        // seta um cliente vazio
        setCliente(Cliente.vazio())
        console.log(cliente)
        exibirFormulario()
    }
    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos()
        console.log(cliente)

    }

    return {
        cliente,
        clientes,
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        tabelaVisivel,
        exibirTabela
    }
}