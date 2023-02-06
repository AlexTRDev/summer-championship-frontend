import React from 'react'
import './styles/Loader.css'

export interface LoaderInterface {}

const Loader: React.FC<LoaderInterface> = () => {
  return (
    <div className="grid place-content-center place-items-center h-56 w-full">
      <span className="loader2 "></span>
    </div>
  )
}

export default Loader
