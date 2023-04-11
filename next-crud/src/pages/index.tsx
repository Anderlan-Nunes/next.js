import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import useClientes from "@/hooks/useClientes";



export default function Home() {
  
  const {
    cliente,
    clientes,
    tabelaVisivel,
    exibirTabela,
    selecionarCliente,
    excluirCliente,
    novoCliente,
    salvarCliente
  } = useClientes()
  return (
    <div className={`
      flex min-h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples" >
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao corBotao="blue" className="mb-4" 
                onClick={novoCliente}
              >Novo Cliente</Botao> 
            </div>

            <Tabela clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente} />
          </>

        ) : (<Formulario 
            cliente={cliente} // vou passar meu estado cliente
            cancelado={exibirTabela}
            clienteMudou={salvarCliente}
          />)
        }

      </Layout>
    </div>
  )
}

// vou precisar criar um stado para armazenar meu cliento vou inicica-lo como vazio