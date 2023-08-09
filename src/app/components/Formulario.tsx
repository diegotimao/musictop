'use client'
import React from 'react';
import FormLogin from './FormLogin';
import FormRegister from './FormRegister';
import Image from 'next/image';
import LogoImage from '../../../public/logo.svg';
import Account from './Account';

export default function Formulario({ pathName }: { pathName: string }) {
  return (
    <section className='bg-white w-full pl-10 p-10 sm:max-w-xl md:max-w-2xl rounded-lg flex flex-col gap-8 border-spacing-2 border-gray-800'>
      <div className='flex flex-col gap-3'>
        <div className='w-full flex justify-center pb-5'>
          <Image src={LogoImage} alt='Logo Web' className='w-42'/>
        </div>
        <div className='flex flex-col gap-3'>
          <span className='text-xl font-semibold text-gray-500'>Seja bem-vindo(a)</span>
          <h1 className='font-semibold text-4xl'>Faça seu {pathName === '/login' ? 'login' : 'cadastro'}</h1>
          <span className='text-base'>Entre com seus dados e curta bons momentos escutando suas músicas e artistas favoritos.</span>
        </div>
      </div>
      {pathName === '/login' ? <FormLogin /> : <FormRegister />}
      <Account pathName={pathName}/>   
    </section>
  )
}
