import Layout from "@/components/Layout";

export default function Home() {
  return (
    <div className={`
      flex min-h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples" >
        <span>Conteudo</span>
      </Layout>
    </div>
  )
}