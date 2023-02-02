import React from 'react'
import perfil from '../../../assets/img/Alex_wsp.jpeg'
import { IPlayer } from '../../../types/person'
import './styles/Player.css'

export interface PlayerInterface {
  player: IPlayer
}

const Player: React.FC<PlayerInterface> = ({ player: { lastName, name, images, playerStats } }) => {
  return (
    <div className="card">
      <div className="lines"></div>
      <div className="imgBox">
        <img src={images?.[0]?.url ?? perfil} />
      </div>
      <div className="cont">
        <div className="details">
          <h2>
            {name} <br /> <span>{lastName}</span>
          </h2>
          <div className="data">
            <h3>
              {playerStats?.[0].gamesPlayed}
              <br />
              <span>Partidos jugados</span>
            </h3>
            <h3>
              {playerStats?.[0].goalsScored}
              <br />
              <span>Goles</span>
            </h3>
            <h3>
              {playerStats?.[0].numberAsists}
              <br />
              <span>Asistencias</span>
            </h3>
          </div>
          <div className=" hidden">
            <button>Follow</button>
            <button>Message</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Player
