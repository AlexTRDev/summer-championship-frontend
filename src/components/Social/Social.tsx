import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'

export interface SocialInterface {}

const Social: React.FC<SocialInterface> = () => {
  return (
    <div className="flex flex-row items-center justify-evenly gap-4 p-2">
      <BsInstagram className="h-[20px] w-[20px] hover:cursor-pointer fill-black hover:fill-white" />
      <AiFillGithub className="h-[20px] w-[20px] hover:cursor-pointer fill-black hover:fill-white" />
      <BsFacebook className="h-[20px] w-[20px] hover:cursor-pointer fill-black hover:fill-white" />
      <BsWhatsapp className="h-[20px] w-[20px] hover:cursor-pointer fill-black hover:fill-white" />
    </div>
  )
}

export default Social
