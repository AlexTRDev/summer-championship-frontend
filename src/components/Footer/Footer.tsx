import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { social } from '../Social/Social'
import { MdOutgoingMail } from 'react-icons/md'
export interface FooterInterface {}

const Footer: React.FC<FooterInterface> = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="w-full mx-auto px-8">
        <div className="flex flex-wrap justify-start">
          <div className="pt-4 sm:pt-0 w-full md:w-1/4 sm:text-left flex flex-col items-center justify-center  sm:items-start sm:justify-start">
            <h5 className="font-bold uppercase mb-4">Acerca del Sitio</h5>
            <p className="text-xs text-justify">
              Este sitio web fue creado sin fines de lucro para brindar información sobre el Campeonato de Verano Chota
              2023. Todos los datos y contenidos aquí presentados son proporcionados con fines informativos solamente y
              no pretenden reemplazar la información oficial del campeonato. Nos esforzamos por mantener la información
              actualizada y precisa, pero no podemos garantizar su exactitud. Si tienes alguna pregunta o comentario, no
              dudes en contactarnos.
            </p>
          </div>

          <div className="pt-4 sm:pt-0 w-full md:w-1/4 sm:text-left text-center">
            <h5 className="font-bold uppercase mb-4 sm:pl-10">Links</h5>
            <ul className={'flex flex-col gap-y-2 text-xs  '}>
              <li className={'sm:text-start sm:pl-10'}>
                <NavLink to="Equipos">Equipos</NavLink>
              </li>
              <li className={'sm:text-start sm:pl-10'}>
                <NavLink to="Calendario">Calendario</NavLink>
              </li>
              <li className={'sm:text-start sm:pl-10'}>
                <NavLink to="Estadisticas">Estadisticas</NavLink>
              </li>
              <li className={'sm:text-start sm:pl-10'}>
                <NavLink to="Contacto">Contacto</NavLink>
              </li>
              <li className={'sm:text-start sm:pl-10'}>
                <NavLink to="Reglamento">Reglamento</NavLink>
              </li>
              <li className={'sm:text-start sm:pl-10'}>
                <NavLink to="LaPolla">La Polla</NavLink>
              </li>
              <li className={'sm:text-start sm:pl-10'}>
                <NavLink to="Sobre-mi">Sobre mi</NavLink>
              </li>
            </ul>
          </div>

          <div className="pt-4 sm:pt-0 w-full md:w-1/4 text-center md:text-left flex flex-col items-center justify-center  sm:items-start sm:justify-start">
            <h5 className="font-bold uppercase mb-4">Contacto</h5>
            <ul className="list-unstyled">
              <li className="mb-2 ">
                <a
                  href="mailto:alextrdev@gmail.com"
                  target={'_blank'}
                  className="text-white hover:text-gray-400 flex items-center justify-start gap-2"
                >
                  <MdOutgoingMail />
                  alextrdev@gmail.com
                </a>
              </li>
              <li className="mb-2">
                <a
                  href={social.wsp}
                  target="_blank"
                  title="Whatsapp"
                  className="text-white hover:text-gray-400 flex items-center justify-start gap-2"
                >
                  <BsWhatsapp />
                  (+51) 980 885 737
                </a>
              </li>
            </ul>
          </div>

          <div className="pt-4 sm:pt-0 w-full md:w-1/4 text-center md:text-left flex flex-col items-center justify-center  sm:items-start sm:justify-start">
            <h5 className="font-bold uppercase mb-4">Síguenos</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href={social.insta}
                  target="_blank"
                  title="Instagram"
                  className="text-white hover:text-gray-400 flex items-center justify-start gap-2"
                >
                  <BsInstagram />
                  Instagram
                </a>
              </li>

              <li className="mb-2">
                <a
                  href={social.linkedin}
                  target="_blank"
                  title="Linkedin"
                  className="text-white hover:text-gray-400 flex items-center justify-start gap-2"
                >
                  <BsLinkedin />
                  LinkedIn
                </a>
              </li>

              <li className="mb-2">
                <a
                  href={social.fb}
                  target="_blank"
                  title="Facebook"
                  className="text-white hover:text-gray-400 flex items-center justify-start gap-2"
                >
                  <BsFacebook />
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-center">
          <p className="text-xs">&copy; {new Date().getFullYear()} AlexTR Dev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
{
  /* 
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
*/
}
