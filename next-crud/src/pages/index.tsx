import ColecaoCliente from "@/backend/db/ColecaoCliente";
import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import ClienteRepositorio from "@/core/ClienteRepositorio";
import { useEffect, useState } from 'react';


export default function Home() {

  const repo: ClienteRepositorio = new ColecaoCliente()

  const [clientes, setClientes] = useState<Cliente[]>([])
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio()) // 1
  const [visivel, setVisivel] = useState<'form' | 'tabela'>('tabela')

  // const clientes = [
  //   new Cliente("Tsunade", 37, "1"),
  //   new Cliente("Shika", 39, "2"),
  //   new Cliente("Hinata", 9, "3"),
  //   new Cliente("Goku", 37, "4"),
  // ]

  // vou usar para alterar o stado na inicializacao do componente
  useEffect(obterTodos, [])
  
  function obterTodos(){
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      setVisivel('tabela')
    })
    
  }

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    console.log(cliente.nome)
    setVisivel('form')
  }

  async function clienteExcluido(cliente: Cliente) {
    await repo.excluir(cliente)
    obterTodos()
    console.log(`Excluir ${cliente.nome}`)
  }

  function novoCliente(){
    // seta um cliente vazio
    setCliente(Cliente.vazio())
    console.log(cliente)
    setVisivel('form')
  }
  async function salvarCliente(cliente: Cliente){
    await repo.salvar(cliente)
    obterTodos()
    console.log(cliente)
  
  }

  
  return (
    <div className={`
      flex min-h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples" >
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao corBotao="blue" className="mb-4" 
                onClick={novoCliente}
              >Novo Cliente</Botao> 
            </div>

            <Tabela clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido} />
          </>

        ) : (<Formulario 
            cliente={cliente} // vou passar meu estado cliente
            cancelado={() => setVisivel('tabela')}
            clienteMudou={salvarCliente}
          />)
        }

      </Layout>
    </div>
  )
}

// vou precisar criar um stado para armazenar meu cliento vou inicica-lo como vazio