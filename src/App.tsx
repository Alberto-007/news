import Form from "./components/Form"

function App() {
  return (
    <div className="bg-slate-900 text-white p-4 min-h-screen w-full flex flex-col items-center 
    justify-center gap-4">
      <h1 className="text-white font-bold text-2xl">Inscreva-se</h1>
      <p>Assine nossa Newsletter e mantenha-se informado</p>
      <div className="w-96 mt-4 bg-stone-200 px-4 py-5 rounded-lg text-black">
      <Form />
      </div>
      <p className="text-slate-100 text-xs w-96 mt-2 text-center">Ao se inscrever, você passará a receber os nossos e-mails com as melhores dicas, 
        novidades e ofertas.</p>
    </div>
  )
}

export default App
