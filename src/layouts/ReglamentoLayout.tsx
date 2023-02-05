function ReglamentoLayout() {
  return (
    <div className=" p-6 h-full-cell w-full text-gray-700">
      <h2 className="text-xl font-bold mb-4">Reglas basicas de Fútbol sala de 6 Jugadores </h2>
      <ol className="list-decimal p-6 pt-2 font-medium text-justify">
        <li>Cada equipo está compuesto por 6 jugadores, incluyendo el portero.</li>
        <li>El juego dura 2 tiempos de 20 minutos cada uno.</li>
        <li>Se juega en un espacio reducido y sin paredes.</li>
        <li>No se permite el uso de las manos, excepto por el portero dentro de su área.</li>
        <li>Se permite el toque de banda en todas las direcciones.</li>
        <li>Se aplican las reglas tradicionales del fútbol en cuanto a faltas, tarjetas, etc.</li>
        <li>El equipo con más goles al final del tiempo regulado gana el juego.</li>
      </ol>
    </div>
  )
}

export default ReglamentoLayout
