'use client'
import React, { useState, useContext } from 'react'
import { AtSign, Lock, User } from 'lucide-react';
import { ValidationEmail } from '@/utils/ValidattionEmail';
import { hashPassword } from '@/utils/bcryptUtils';
import { firebase } from '@/services/firebase';
import { useRouter } from 'next/navigation';

export default function FormRegister() {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  
  const router = useRouter();

  const existEmailUser = async (email: string) => {
    try {
      const usersRef = firebase.database().ref('users');
      const snapshot = await usersRef.orderByChild('email').equalTo(email).once('value');
      console.log(snapshot.exists());
      return snapshot.exists();
    } catch (error) {
      console.log("Error");
      return false;
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const ref = firebase.database().ref('users');
      const isValidEmail: boolean = ValidationEmail(email);

      if (!isValidEmail || password.length < 6 || name.length < 2) {
        return alert("Por favor verifique os dados!");
      }

      const doesEmailExist = await existEmailUser(email);
      console.log(doesEmailExist);
      if (!doesEmailExist) {
        console.log('Creating user...');
        const hash = await hashPassword(password);
  
        const user = {
          name,
          email,
          password: hash,
        };
  
        const insertUser = await ref.push(user);
        const idUser = await insertUser.key;
        console.log('User inserted with ID:', idUser);
        router.push('/'); // Realizar o redirecionamento usando router.push
      } else {
        console.log('Email already exists');
        alert('Já existe um email cadastrado!');
      }
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      alert("Erro ao cadastrar usuário. Por favor, tente novamente mais tarde.");
    }
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
