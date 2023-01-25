import React from 'react'
// import { Stats } from '../../types/stats'
import { Team } from '../../types/team'
export interface TeamCardInterface {
  team: Team
}

const TeamCard: React.FC<TeamCardInterface> = ({ team }) => {
  return (
    <div className={' shadow-black/80 shadow-lg p-2 m-2 w-96'}>
      <h1>{team.name}</h1>
      <img src={`src/assets/img/${team.logo}.png`} alt={team.name} width={50} />
    </div>
  )
}

export default TeamCard
