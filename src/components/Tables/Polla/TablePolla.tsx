import { Link } from 'react-router-dom'
import { users } from '../../../assets/info/data'

export interface PollaInterface {
  jornada: number
}

const headers = ['Código', 'Nombre Completo', 'Polla', 'Aciertos']

const TablePolla: React.FC<PollaInterface> = ({ jornada }) => {
  const handleClick = () => {
    if (window.screen.width > 900) window.scrollTo({ top: 121, behavior: 'smooth' })
    else window.scrollTo({ top: 64, behavior: 'smooth' })
  }
  return (
    <div className="p-2 w-full min-h-[200px] border-t ">
      <h1 className="text-blue-500 font-bold text-xl">
        PARTICIPANTES{' '}
        <span className="animate-pulse text-xl font-bold  text-radical-red">
          {users.filter(user => user.polla === jornada).length}
        </span>
      </h1>
      <table className="table-auto w-full ">
        <thead>
          <tr className="text-gray-500 border-b text-[10px] sm:text-base">
            {headers.map((header, i) => (
              <th key={crypto.randomUUID()} className={`hidden sm:table-cell text-start`}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users
            .sort((a, b) => a.nombre.localeCompare(b.nombre))
            .filter(user => user.polla === jornada)
            .map(user => (
              <tr
                key={crypto.randomUUID()}
                className=" h-10 text-[10px] sm:text-base even:bg-slate-200 text-gray-500  hover:from-black/90 hover:to-black/90"
              >
                <td className="text-start uppercase">{user.codigo}</td>
                <td className="text-start uppercase">{user.nombre}</td>
                <td className="text-start">
                  <Link
                    onClick={handleClick}
                    to={`/ver-boleto/${user.codigo}`}
                    className="bg-black font-semibold w-12 text-[#FFC745] py-1 px-2 rounded"
                  >
                    Ver
                  </Link>
                </td>
                <td className="text-start">{user.aciertos}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default TablePolla
