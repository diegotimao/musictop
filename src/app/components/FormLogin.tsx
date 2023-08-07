'use client'
import { AtSign, Lock,  } from 'lucide-react'
import React, { useState } from 'react'
import { database } from '@/services/firebase'
import Link from 'next/link';

export default function FormLogin() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
  const restForm = () => {
    setEmail('');
    setPassword('');
    return
  }

  const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const ref = database.ref('users')

    if (!email || !password) {
      console.log("Por favor digite suas credenciais.");
      return;
    }

    const data = {
      email,
      password,
    }
    ref.push(data);

    return restForm();
  }

  return (
    <form onSubmit={handleForm} className='flex flex-col gap-5'>
      <label htmlFor="" className='flex flex-col gap-2'>
        Email
        <input
          type="text"
          placeholder='E-mail'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={false}
          className='w-full h-14 pl-12 border border-gray-400/50 rounded-md relative
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-red-200 
            disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
        />
        <AtSign className='absolute my-12 ml-4' color='#bdb7b7'/>
      </label>
      <label htmlFor="" className='flex flex-col gap-2'>
        Senha
        <input
          type="password"
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='w-full h-14 pl-12 border rounded-md relative border-gray-400/50
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 
            disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
        />
        <Lock className='absolute my-12 ml-4' color='#bdb7b7'/>
      </label>
      <div className='flex justify-between pt-3 pb-3'>
        <label htmlFor="" className='flex gap-2'>
          <input type="checkbox" className='cursor-pointer w-5'/>
          Lembrar de min
        </label>
        <Link href={"#"} className='text-blue-500'>
          Esqueci minha senha?
        </Link>
      </div>
      <button
        className='w-full h-14 bg-blue-600 font-bold text-3md text-white rounded-3xl'
      >Continuar</button>
    </form>
  )
}
