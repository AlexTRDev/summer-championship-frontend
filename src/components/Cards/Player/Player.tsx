import React from 'react'
import perfil from '../../../assets/img/Alex_wsp.jpeg'
import { Social } from '../../Social'
import { FiArrowDownCircle } from 'react-icons/fi'
import './styles/Player.css'

export interface PlayerInterface {}

const Player: React.FC<PlayerInterface> = () => {
  return (
    <section className="bg-gray-200 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-medium pt-2 pl-2 sm:hidden text-gray-500 text-start w-full">Sobre mi</h1>
      <div className="grid place-content-center pt-20">
        <div className="card">
          <div className="lines"></div>
          <div className="imgBox">
            <img src={perfil} />
          </div>
          <div className="cont relative">
            <FiArrowDownCircle className="absolute animate-bounce w-6 h-6 right-10 bottom-2 fill-transparent stroke-violet-500" />
            <div className="details">
              <h2 className="font-semibold text-white">
                Alex <br /> <span>Terrones Rivera</span>
              </h2>
              <div className="data">
                <h3 className="text-center text-blue-500 font-medium">
                  Developer
                  <span className=""> & </span>
                  Designer
                </h3>
              </div>
              <Social />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center max-w-xs p-4">
        <h2 className="text-2xl font-bold text-blue-500">Full Stack Developer y Diseñador UX/UI</h2>
        <p className="text-gray-500">
          Experto en el desarrollo de aplicaciones de escritorio, web y móviles utilizando tecnologías modernas, asi
          mismo en el diseño y creación de experiencias de usuario intuitivas y atractivas.
        </p>
        <div className="flex items-center mt-10">
          <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

export default Player
