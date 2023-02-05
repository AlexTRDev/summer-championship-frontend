import React from 'react'
// import defaultLogo from '../../../assets/img/team_logo_default.png'

export interface MVPInterface {}

const MVP: React.FC<MVPInterface> = () => {
  return (
    <section className="p-2 w-full">
      <table className="table-auto w-full ">
        <thead className="text-gray-500 border-b">
          <tr>
            <th className="text-center hidden sm:table-cell">Ranking</th>
            <th className="text-center sm:hidden">Rank</th>
            <th className="text-start">Equipo</th>
            <th className="text-center">Nombre</th>
            <th className="text-center">Jornada</th>
          </tr>
        </thead>
        <tbody>
          <tr className="even:bg-slate-200">
            {/* <td className="text-center">1</td>
            <td className=" text-start flex flex-row items-start ">
              <img src={defaultLogo} className="w-8" alt="Team 1" width={30} />
              <span className="text-lg">Team</span>
            </td>
            <td className=" text-center">Kun Agüero</td>
            <td className=" text-center"> 2023-01-15</td> */}
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default MVP
