import React from 'react'
import { imgTeam, logo } from '../../assets'
import { Team } from '../../types/team'

export interface LogosInterface {
  teams: Team[]
}

const Logos: React.FC<LogosInterface> = ({ teams }) => {
  return (
    <div className="flex flex-row justify-center items-center content-center w-full p-2">
      <div className="flex flex-row flex-wrap justify-center items-center gap-x-8">
        {teams
          .map(team => <img key={crypto.randomUUID()} src={imgTeam} alt={team.name} width={'33'} />)
          .slice(0, teams.length / 2)}
      </div>
      <img src={logo} alt="logo del campeonato" width={'100px'} />
      <div className="flex flex-row flex-wrap justify-center items-center gap-x-8">
        {teams
          .map(team => <img key={crypto.randomUUID()} src={imgTeam} alt={team.name} width={'33'} />)
          .slice(teams.length / 2, teams.length)}
      </div>
    </div>
  )
}

export default Logos
