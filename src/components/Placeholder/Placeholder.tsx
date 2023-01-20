import React from 'react'
export interface PlaceholderInterface {}

const Placeholder: React.FC<PlaceholderInterface> = () => {
  return (
    <div className="w-96 bg-toBottom">
      <img
        className="brightness-0 drop-shadow-sombra "
        src="https://kingsleague.pro/wp-content/uploads/2022/12/KUNSPORTS-KUN-AGUERO.png"
        alt="kun Agüero placeholder"
      />
    </div>
  )
}

export default Placeholder
