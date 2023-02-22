import React from 'react'
import { useNavigate } from 'react-router'
import yape from '../../assets/img/YAPE.png'

export interface YapeInterface {}

const Yape: React.FC<YapeInterface> = () => {
  const navigate = useNavigate()

  window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="">
      <button className="text-blue-500 underline px-2 sm:hidden" onClick={() => navigate('/LaPolla')}>
        Ir a la polla
      </button>
      <h1 className="text-gray-600 px-2">Recargar con yape</h1>
      <p className="text-gray-600 px-2">Enviar la captura de su comprobante. </p>

      <img src={yape} alt="yape" className="sm:w-96" />
    </div>
  )
}

export default Yape
