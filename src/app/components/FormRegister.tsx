'use client'
import React, { useState } from 'react'
import { AtSign, Lock, User } from 'lucide-react';

export default function FormRegister() {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      name,
      email,
      password
    })
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
      <label htmlFor="" className='flex flex-col gap-2'>
        Nome
        <input
          type="text"
          placeholder='Nome'
          disabled={false}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='w-full h-14 pl-12 border border-gray-400/50 rounded-md relative
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-red-200 
            disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
        />
        <User className='absolute my-12 ml-4' color='#bdb7b7'/>
      </label>
      <label htmlFor="" className='flex flex-col gap-2'>
        Email
        <input
          type="text"
          placeholder='E-mail'
          disabled={false}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
      <button
        className='w-full h-14 bg-blue-600 font-bold text-3md text-white rounded-3xl'
        type='submit'
      >Continuar</button>
    </form>
  )
}
