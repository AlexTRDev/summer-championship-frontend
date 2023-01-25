import React from 'react'
import { imgTeam } from '../../../assets/img/index'

export interface ScorersInterface {}

const Scorers: React.FC<ScorersInterface> = () => {
  return (
    <table className="table-auto w-full ">
      <thead className="bg-black">
        <tr className="text-white">
          <th className="text-center">Pos</th>
          <th className="text-start">Equipo</th>
          <th className="text-center">PG</th>
          <th className="text-center">PP</th>
          <th className="text-center">PE</th>
          <th className="text-center">GF</th>
          <th className="text-center">GC</th>
          <th className="text-center">TA</th>
          <th className="text-center">TR</th>
          <th className="text-center">Pts</th>
        </tr>
      </thead>
      <tbody>
        <tr className="even:bg-white odd:bg-slate-200">
          <td className="p-2 text-center">1</td>
          <td className="p-2 text-start flex flex-row items-start ">
            <img src={imgTeam} className="w-8" alt="Team 1" width={30} />
            <span className="text-lg">Team 1</span>
          </td>
          <td className="p-2 text-center">3</td>
          <td className="p-2 text-center">0</td>
          <td className="p-2 text-center">0</td>
          <td className="p-2 text-center">9</td>
          <td className="p-2 text-center">3</td>
          <td className="p-2 text-center">+6</td>
          <td className="p-2 text-center">3</td>
          <td className="p-2 text-center">9</td>
        </tr>
        <tr className="even:bg-white odd:bg-slate-200">
          <td className="p-2 text-center">2</td>
          <td className="p-2 text-start flex flex-row items-start ">
            <img src={imgTeam} className="w-8" alt="Team 2" width={30} />
            <span className="text-lg">Team 1</span>
          </td>
          <td className="p-2 text-center">3</td>
          <td className="p-2 text-center">0</td>
          <td className="p-2 text-center">0</td>
          <td className="p-2 text-center">9</td>
          <td className="p-2 text-center">3</td>
          <td className="p-2 text-center">+6</td>
          <td className="p-2 text-center">3</td>
          <td className="p-2 text-center">9</td>
        </tr>
        <tr className="even:bg-white odd:bg-slate-200">
          <td className="p-2 text-center">2</td>
          <td className="p-2 text-start flex flex-row items-start ">
            <img src={imgTeam} className="w-8" alt="Team 2" width={30} />
            <span className="text-lg">Team 1</span>
          </td>
          <td className="p-2 text-center">3</td>
          <td className="p-2 text-center">0</td>
          <td className="p-2 text-center">0</td>
          <td className="p-2 text-center">9</td>
          <td className="p-2 text-center">3</td>
          <td className="p-2 text-center">+6</td>
          <td className="p-2 text-center">3</td>
          <td className="p-2 text-center">9</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Scorers
