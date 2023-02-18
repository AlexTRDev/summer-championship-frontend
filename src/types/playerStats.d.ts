import { IPlayer } from './person'

export interface IPlayerStats {
  id?: number
  gamesPlayed: number
  goalsScored: number
  numberAsists: number
  yellowCards: number
  redCards: number
  playerId: number
  player: IPlayer
}
