import React from 'react'
import { ButtoSocials as ButtonSocialsInterface } from '../interfaces/ButtonSocials.interface';
import Image from 'next/image';

const ButtoSocials: React.FC<ButtonSocialsInterface> = ({ title, url }) => {
  return (
    <button
      className='w-full flex justify-center items-center gap-2 sm:w-2/4 h-14 bg-white 
        rounded-md font-semibold border border-white-400/50'
    >
      <Image src={url} alt='Logo icon' className='w-7'/>
      Login com o {title}
    </button>
  )
}

export default ButtoSocials;