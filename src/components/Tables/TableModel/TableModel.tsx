import React from 'react'

interface User {
  codigo: string
  nombre: string
  aciertos: number
}

export interface TableModelInterface {
  aligment: string[]
  headers: string[]
  data: User[]
}

const TableModel: React.FC<TableModelInterface> = ({ headers, data, aligment }) => {
  return (
    <section className="p-2 w-full min-h-[200px]">
      <table className="table-auto w-full">
        <thead>
          <tr className="text-gray-500 border-b text-[10px] sm:text-base">
            {headers.map((header, i) => (
              <th className={`${aligment[i]} hidden sm:table-cell`}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </section>
  )
}

export default TableModel

// <td className={`${aligment[i]}`}>{d[i]}</td>
