import { DocumentPDF } from '../components'

function LaPollaLayout() {
  return (
    <div className="p-2">
      <h1 className="text-xl font-bold text-gray-500 p-2">LA POLLA</h1>
      <h1 className=" font-bold text-gray-500 p-2">
        Aqui podras ver la relacion de partidos y seleccionar tus predicciones, al final podras descargar tu ticket en
        formato PDF. <br /> Suerte Crack!!
      </h1>
      <p className="text-gray-500 p-2 font-medium">
        El o las personas que tengan la mayor cantidad de aciertos se haran con el pozo acumulado... 🤑
      </p>
      <p className="text-gray-500 p-2  font-medium">Precio: 5 soles</p>
      <DocumentPDF />
      <p className="text-[10px] text-gray-500 p-2  font-medium ">
        *Participar: Para participar deberas descargar tu ticket con tus predicciones y contactarte con alguno de los
        encargados y mandar la copia de tu ticket mas la imagen del aporte. *
      </p>
      <p className="text-[10px] text-gray-500 p-2  font-medium ">
        *Premiacioón: La premiación al ganad@r o ganadores se les estara haciendo entraga del mismo al finalizar todos
        los encuentros deportivos en el mismo recinto de dicho campeonato(Coliseo Predro Coronado Alamo)*
      </p>
      <p className="text-[10px] text-gray-500 p-2  font-medium ">
        *OJO: Por cada ticket comprado se estara comisionando 0.50 centimos por el servicio*
      </p>
    </div>
  )
}

export default LaPollaLayout
