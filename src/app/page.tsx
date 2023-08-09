import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="w-full h-full flex">
      <div className="w-80 h-screen bg-white flex-none xl:flex hidden border-r-2 border-gray-400/60">
        {/* Conteúdo da primeira div */}
      </div>
      <div className="flex flex-1 h-screen bg-slate-200">
        <NavBar />
      </div>
    </main>
  )
}
