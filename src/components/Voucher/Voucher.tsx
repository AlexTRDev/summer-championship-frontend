// import { useRef } from 'react'
import jsPDF from 'jspdf'
import { useState } from 'react'

interface IVoucher {
  data: any
}

const Voucher: React.FC<IVoucher> = ({ data }) => {
  const [name, setName] = useState('')

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setName(e.target.value)
  }

  const handleGeneratePDF = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const matches = Object.entries(data)
      .sort((a, b) => Number(a[0].split(' - ')[0]) - Number(b[0].split(' - ')[0]))
      .map(d => {
        const partido = d[0].split(' - ')[0]
        const local = d[0].split(' - ')[1]
        const visitante = d[0].split(' - ')[2]
        const resultado = d[1] as String

        return {
          partido,
          local,
          visitante,
          resultado,
        }
      })

    const doc = new jsPDF('p', 'mm', [190, 190])

    doc.setFillColor('#004746')
    doc.rect(0, 0, 210, 297, 'F')

    // Colocar el texto dentro del rectángulo
    doc.setTextColor(0, 0, 0)

    doc.setFont('helvetica', 'bold')
    doc.setFontSize(16)
    doc.setTextColor('#ddd')
    doc.text('La Polla - Campeonato de Verano Chota 2023', 40, 10)

    doc.setFontSize(10)
    doc.setTextColor('#aaa')
    doc.text(`${name} - ${crypto.randomUUID().slice(0, 6)}`, 10, 20)

    let y = 40
    doc.setTextColor('#FFC745')

    doc.text(`Partido`, 10, y - 10)
    doc.text(`Local`, 30, y - 10)
    doc.text(`Visitante`, 100, y - 10)
    doc.text(`Resultado`, 170, y - 10)

    doc.setFont('helvetica', 'normal')
    matches.forEach(match => {
      doc.text(`Partido ${match.partido}:`, 10, y)
      doc.text(`${match.local}`, 30, y)
      doc.text(`${match.visitante}`, 100, y)
      doc.text(`${match.resultado}`, 180, y)
      y += 7
    })

    const date = new Date()

    doc.setFont('helvetica', 'bold')
    doc.setFontSize(8)
    doc.setTextColor('#ddd')

    doc.text(
      `Fecha de compra: ${date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      })}`,
      14,
      y + 20
    )

    doc.setFont('helvetica', 'italic', 'bold')
    doc.text(`Copyright © La Polla - Chota Verano 2023`, 110, y + 20)

    doc.save('boleto.pdf')
  }

  return (
    <form onSubmit={handleGeneratePDF} className="p-4 w-full flex flex-col gap-4">
      <div className="text-gray-500">
        <label htmlFor="name">Nombre: </label>
        <input className="border" type="text" name="nombre" id="nombre" required onChange={e => handleName(e)} />
      </div>

      <div className="relative">
        {Object.entries(data).length !== 18 ? (
          <h3 className="animate-bounce font-medium w-full absolute -bottom-4 text-radical-red-700">
            Debes rellenar todos los campos...!
          </h3>
        ) : (
          <h3 className="animate-bounce font-medium w-full absolute top-5 -left-40 text-blue-700">
            Ya puedes generar tu Ticket...!
          </h3>
        )}
        <button
          className="animate-bounce h-10 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          disabled={Object.entries(data).length !== 18}
        >
          <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Generar Ticket</span>
        </button>
      </div>
    </form>
  )
}

export default Voucher
