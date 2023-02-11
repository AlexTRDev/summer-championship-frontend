import { DocumentPDF } from '../components'

function LaPollaLayout() {
  return (
    <div className="p-2 w-full">
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
    </div>
  )
}

export default LaPollaLayout
