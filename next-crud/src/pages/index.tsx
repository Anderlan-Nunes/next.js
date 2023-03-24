import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente("Tsunade", 37, "1"),
    new Cliente("Shika", 39, "2"),
    new Cliente("Hinata", 9, "3"),
    new Cliente("Goku", 37, "4"),
  ]
  return (
    <div className={`
      flex min-h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples" >
        <Tabela clientes={clientes}></Tabela>
      </Layout>
    </div>
  )
}
