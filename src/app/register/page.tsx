'use client'
import React from 'react'
import Formulario from '../components/Formulario'
import { usePathname } from 'next/navigation'

export default function Register() {
  const router = usePathname();
  return (
    <main className="flex min-h-screen p-5 flex-col items-center justify-center bg-gray-200 bg-[url('../../public/banner.jpg')]">
      <Formulario  pathName={router}/>
    </main>
  )
}