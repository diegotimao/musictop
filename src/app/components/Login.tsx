'use client'
import React, { useContext } from 'react'
import FormLogin from './FormLogin'
import ButtoSocials from './ButtoSocials'
import logoGoole from '../../../public/logogoogle.png';
import logoGithub from '../../../public/logogithub.png';
import { AuthContext } from '@/context/auth';

export default function Login() {

  const { user, login, logout} = useContext(AuthContext);
  
  return (
    <section className='bg-white w-full p-10 sm:max-w-xl md:max-w-2xl
        rounded-lg flex flex-col gap-8 border-spacing-2 border-gray-800'>
      <div className='flex flex-col gap-3 pt-2'>
        <div className='flex flex-col gap-3'>
          <span className='text-xl font-semibold text-gray-500'>Seja bem-vindo(a)</span>
          <h1 className='font-semibold text-4xl'>Faça seu login</h1>
          <p>{user?.email}</p>
          <span className='text-base'>Entre com seus dados e curta bons momentos escutando suas músicas e artistas favoritos.</span>
        </div>
      </div>
      <FormLogin />
      <div className='flex flex-col sm:flex-row gap-2 '>
          <ButtoSocials title='Google' url={logoGoole} />
          <ButtoSocials title='Github' url={logoGithub} />
      </div>
      <div className='flex justify-center p-2'>
        <span>Não tem uma conta? Registre-se</span>
      </div>    
    </section>
  )
}
