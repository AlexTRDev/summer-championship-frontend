import { Gender } from './enums'
import { IImage } from './image'
import { IPlayerStats } from './playerStats'

export interface IPerson {
  dni: string
  name: string
  lastName: string
  birthday: string
  gender: Gender
}

export interface IPlayer extends IPerson {
  image?: string
  teamId?: number
  images?: IImage[]
  playerStats?: IPlayerStats[]
}

export interface IManager extends IPerson {
  image?: string
  teamId?: number
  images?: IImage[]
}
