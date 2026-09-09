import Login from "./components/Login"

function App() {
  return (
    <>

      <header className="bg-slate-700 p-5">
          <h1 className="text-2xl text-center uppercase text-white font-black">Login de pruebas de Seguridad en el desarrollo de software</h1>
      </header>

      <div className="flex justify-center items-center h-screen">
        <Login/>
      </div>
    </>
  )
}

export default App
