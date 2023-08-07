'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function Account({ pathName }: { pathName: string}) {
  const [account, SetAccount] = useState<JSX.Element | null>(null);
  
  useEffect(() => {
    if (pathName === '/login') {
      SetAccount(
        <span className='text-md'>Não tem uma conta? <Link href={"/register"} className='text-blue-600 font-semibold'>Registre-se</Link></span>
      )
    } else if (pathName === '/register') {
      SetAccount(
        <span>Já possui uma conta? <Link href={"/login"} className='text-blue-600 font-semibold'>Faça login</Link></span>
      )
    }
  }, [pathName])

  return (
    <section className='flex justify-center p-2'>
      {account}
    </section> 
  )
}
