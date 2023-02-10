import React from 'react'
import { NavLink } from 'react-router-dom'
import { useGetTeamsQuery } from '../../app'
import { ChampionshipLogoDefault, TeamLogoDefault } from '../../assets'
import { Loader } from '../Loader'

export interface LogosInterface {}

const Logos: React.FC<LogosInterface> = () => {
  const { data, error, isLoading } = useGetTeamsQuery()

  if (isLoading) return <Loader />
  if (error) return <h1 className="text-gray-500 text-xl font-medium">... Error en la petición ...</h1>
  return (
    <div className="hidden sm:flex flex-row justify-center items-center content-center w-full p-2">
      <div className="hidden sm:flex flex-row flex-wrap justify-center items-center gap-x-8 ">
        {data?.teams
          ?.map(() => <TeamLogoDefault key={crypto.randomUUID()} tailwind={'w-[32px]  h-[32px]'} />)
          .slice(0, data.teams?.length / 2)}
      </div>
      <NavLink to="/">
        <ChampionshipLogoDefault tailwind={'w-[90px] h-[90px] '} />
      </NavLink>
      <div className="hidden sm:flex flex-row flex-wrap justify-center items-center gap-x-8 ">
        {data?.teams
          ?.map(() => <TeamLogoDefault key={crypto.randomUUID()} tailwind={'w-[32px] h-[32px]'} />)
          .slice(data.teams?.length / 2, data.teams?.length)}
      </div>
    </div>
  )
}

export default Logos
