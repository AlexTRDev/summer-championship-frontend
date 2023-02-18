import { IResponse } from './response'

export interface IUser {
  id?: number
  email?: string
  password?: string
  status: Status
  role: UserRole
  name: string
  photo: string
}

export interface IResponseUser extends IResponse {
  user: IUser
}

export interface IResponseUsers extends IResponse {
  users: IUser[]
}
