import React from 'react'

export default function NavBar() {
  return (
    <nav className="bg-white w-full flex h-20 border-b-2 border-gray-400/60">
      <div className="m-auto lg:2/12 xl:w-10/12 2xl:w-12/12 w-10/12 h-full flex justify-between items-center">
        <ul className='flex gap-10 ml-5 font-light text-xl'>
          <li>Navegar</li>
          <li>Categorias</li>
          <li>Tops 10</li>
          <li>Novos Laçamentos</li>
        </ul>
        <div>
          <input type="text" placeholder='Pesquisar...' className='border border-spacing-6 border-black rounded-md h-12 w-80 pl-5'/>
        </div>
      </div> 
    </nav>
  )
}
