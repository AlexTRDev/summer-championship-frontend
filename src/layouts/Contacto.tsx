import { GoogleMapComponent } from '../components'

function Contacto() {
  return (
    <div className="w-full p-4">
      <h1 className="text-2xl font-bold  text-gray-500 mb-2">Horario de apertura</h1>
      <h3 className=" pl-2 pr-4  text-lg font-medium  text-gray-500 text-justify">
        Sólo se podrá acceder al recinto con acreditación o invitación.
      </h3>
      <h3 className="pl-2 pr-4 text-lg font-medium  text-gray-500 text-justify">
        El horario de apertura al público al Coliseo Deportivo Pedro Manuel Coronado Alamo será en los días de partidos
        de 7:30h hasta culminar el ultimo encuentro deportivo.
      </h3>
      <div className="container mx-auto p-10">
        <GoogleMapComponent />
      </div>
    </div>
  )
}

export default Contacto
