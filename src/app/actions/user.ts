import { createAsyncThunk } from '@reduxjs/toolkit'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'

const API_URL = import.meta.env.VITE_API_URL_DEV || import.meta.env.VITE_API_URL_PROD

export const getUser = createAsyncThunk('users/signIn', async (token: string) => {
  const response = await fetch(`${API_URL}users/signIn`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  const { user } = await response.json()
  return { user, token }
})
export const setUser = createAsyncThunk('users/signOut', async () => {
  await signOut(auth)
  return { user: null, token: '' }
})
