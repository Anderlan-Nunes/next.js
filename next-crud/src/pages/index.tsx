import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import { useState } from 'react';


export default function Home() {

  const clientes = [
    new Cliente("Tsunade", 37, "1"),
    new Cliente("Shika", 39, "2"),
    new Cliente("Hinata", 9, "3"),
    new Cliente("Goku", 37, "4"),
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir ${cliente.nome}`)
  }

  function salvarCliente(cliente: Cliente){
    console.log(cliente)
  }

  const [visivel, setVisivel] = useState<'form' | 'tabela'>('tabela')
  
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
              <Botao corBotao="blue" className="mb-4" onClick={() => setVisivel('form')}>Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido} />
          </>

        ) : (<Formulario 
            cliente={clientes[1]}
            cancelado={() => setVisivel('tabela')}
            clienteMudou={salvarCliente}
          />)
        }

      </Layout>
    </div>
  )
}
