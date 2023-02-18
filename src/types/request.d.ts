import { IPrediction } from './prediction'

export interface IPredictionRequest {
  predictions: IPrediction[]
  ticket: ITicket
  token: string
}
