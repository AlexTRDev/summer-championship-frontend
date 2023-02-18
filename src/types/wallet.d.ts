import { UserStatus } from './enums'
import { IResponse } from './response'

export interface IWallet {
  id: number
  balance: number
  status: UserStatus
  userId: number
  createdAt: string
  updatedAt: string
}

export interface IRequestWallet {
  userId: number
  token: string
}

export interface IResponseWallet extends IResponse {
  wallet: IWallet
}

export interface IResponseWallets extends IResponse {
  wallets: IWallet[]
}
