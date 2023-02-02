import React from 'react'
import { NavLink } from 'react-router-dom'
import { TeamLogoDefault } from '../../assets'
import { ITeam } from '../../types/team'
import { gradients, colors, shadows, fills } from '../../utils'
export interface TeamCardInterface {
  team: ITeam
  linear: number
}

const TeamCard: React.FC<TeamCardInterface> = ({ team, linear }) => {
  const gradient = gradients[linear]
  const color = colors[linear]
  const shadow = shadows[linear]
  const fill = fills[linear]
  return (
    <>
      <NavLink to={`${team.id}`}>
        <div
          className={`grid grid-cols-3 gap-4 w-96 h-32 items-center rounded-lg shadow-md ${shadow} ${color} ${gradient} relative overflow-hidden transition-all delay-150 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer duration-200`}
        >
          {team.image ? (
            <img src={team.image} alt={'Team Logo'} />
          ) : (
            <TeamLogoDefault tailwind="fill-white w-[100px] h-[100px] pl-2 z-10" />
          )}
          <TeamLogoDefault tailwind={`${fill} absolute w-[380px] h-[380px] -top-32 left-0`} />
          <h3 className="text-white font-black col-span-2 z-10">{team.name}</h3>
        </div>
      </NavLink>
    </>
  )
}

export default TeamCard
