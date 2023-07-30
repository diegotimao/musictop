import { MailPlus, Lock } from 'lucide-react'
import React from 'react'

export default function Login() {
  return (
    <div className='bg-white w-full p-10 sm:max-w-xl md:max-w-2xl
        rounded-md flex flex-col gap-5'>
        <div className='flex flex-col gap-3'>
          <span className='text-xl font-semibold text-gray-500'>Seja bem-vindo(a)</span>
          <h1 className='font-semibold text-4xl'>Faça seu login</h1>
        </div>
        <form action="" className='flex flex-col gap-5'>
          <label htmlFor="" className='flex flex-col gap-2'>
            Email
            <input type="text"  placeholder='E-mail' className='w-full border border-gray-500 h-14 rounded-md pl-12 relative focus:outline-none 
              focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            '/>
            <MailPlus className='absolute my-12 ml-4' />
          </label>
          <label htmlFor="" className='flex flex-col gap-2'>
            Senha
            <input type="password" placeholder='Password' className='w-full border border-gray-500 h-14 rounded-md pl-12 relative focus:outline-none 
              focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            '/>
            <Lock className='absolute my-12 ml-4' />
          </label>
          <button className='w-full h-14 bg-blue-600 font-bold text-3md text-white rounded-3xl'>Continuar</button>
        </form>
        <div className='flex flex-col gap-5'>
          <div>
            <span>Não tem uma conta? Registre-se</span>
          </div>
          <div>
            <span>Ou entre com suas redes sociais</span>
          </div>
          <div className='flex flex-col gap-10'>
            <button className='w-full h-16 bg-red-600 rounded-md text-white'>Google</button>
            <button>Github</button>
          </div>
        </div>
      </div>
  )
}
