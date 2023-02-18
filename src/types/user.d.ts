export interface IUser {
  id?: number
  email?: string
  password?: string
  status: Status
  role: UserRole
  name?: string
  photo?: string
}
