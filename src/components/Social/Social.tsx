import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { BsFacebook, BsInstagram, BsWhatsapp, BsLinkedin } from 'react-icons/bs'

export interface SocialInterface {}

export const social = {
  insta: 'https://www.instagram.com/alextrdev/',
  fb: 'https://www.facebook.com/Alex.Terrones.Rivera/',
  wsp: 'https://wa.me/+51980885737?text=Campeonato de verano Chota 2023: ',
  git: 'https://github.com/AlexTRDev',
  linkedin: 'https://www.linkedin.com/in/alextrdev/',
  msg: 'Campeonato de verano Chota 2023',
}

const Social: React.FC<SocialInterface> = () => {
  return (
    <div className="flex flex-row items-center justify-evenly gap-4 p-2">
      <a href={social.git} target="_blank" title="Github">
        <AiFillGithub className="h-[20px] w-[20px] hover:cursor-pointer fill-white hover:fill-black " />
      </a>
      <a href={social.linkedin} target="_blank" title="Linkedin">
        <BsLinkedin className="h-[20px] w-[20px] hover:cursor-pointer fill-white hover:fill-black " />
      </a>
      <a href={social.insta} target="_blank" title="Instagram">
        <BsInstagram className="h-[20px] w-[20px] hover:cursor-pointer fill-white hover:fill-black " />
      </a>
      <a href={social.fb} target="_blank" title="Facebook">
        <BsFacebook className="h-[20px] w-[20px] hover:cursor-pointer fill-white hover:fill-black " />
      </a>
      <a href={social.wsp} target="_blank" title="Whatsapp">
        <BsWhatsapp className="h-[20px] w-[20px] hover:cursor-pointer fill-white hover:fill-black " />
      </a>
    </div>
  )
}

export default Social
