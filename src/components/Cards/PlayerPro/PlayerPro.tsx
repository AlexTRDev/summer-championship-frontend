// import playerBasic from '../../../assets/img/playerBasic.png'

import { TeamLogoDefault } from '../../../assets'
import { IPlayer } from '../../../types/person'

export interface PlayerProInterface {
  player: IPlayer
}

const PlayerPro: React.FC<PlayerProInterface> = ({ player: { name, images, lastName, playerStats } }) => {
  return (
    <div className="relative bg-player-basic bg-auto bg-no-repeat bg-center w-[113px] h-[177px] flex flex-col items-center">
      <div className="absolute left-2 top-6 flex flex-col items-start justify-start">
        <h1 className=" text-white text-sm font-medium">DEL</h1>
        <TeamLogoDefault tailwind="w-[25px] h-[25px] fill-white" />
      </div>
      <img
        className={`${
          // images?.[0].url ? 'w-16 ml-6 rounded-full mt-2 p-1 ' : 'brightness-0 drop-shadow-sombra w-16 ml-8'
          'brightness-0 drop-shadow-sombra w-16 ml-6 mt-2'
        } `}
        // src={images?.[0].url ?? `https://kingsleague.pro/wp-content/uploads/2022/12/KUNSPORTS-KUN-AGUERO.png`}
        src={`https://kingsleague.pro/wp-content/uploads/2022/12/KUNSPORTS-KUN-AGUERO.png`}
        alt="player placeholder"
      />

      <div className="divide-y-[1px] w-4/5 pt-1 absolute bottom-5">
        <div>
          <h3 className="text-[10px] font-normal text-white text-center ">
            {`${name}`} <br />
            <span className="font-medium text-white text-center uppercase text-xs">{lastName}</span>
          </h3>
        </div>
        <div className="divide-x-[1px] grid grid-cols-2">
          <div className="pl-2">
            <p className="text-[10px] text-white">
              PJ <span>{playerStats?.[0].gamesPlayed}</span>
            </p>
            <p className="text-[10px] text-white">
              G <span>{playerStats?.[0].goalsScored}</span>
            </p>
            <p className="text-[10px] text-white">
              A <span>{playerStats?.[0].numberAsists}</span>
            </p>
          </div>
          <div className="pl-2">
            <p className="text-[10px] text-white">
              TA <span>1</span>
            </p>
            <p className="text-[10px] text-white">
              TR <span>0</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerPro
