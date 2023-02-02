import { IPlayer } from './person'

export interface ITeam {
  id?: number
  name: string
  serie: SerieTeam
  season: number
  presentation: boolean
  image?: string
  players?: IPlayer[]
}
