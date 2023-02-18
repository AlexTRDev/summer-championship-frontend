import { createAsyncThunk } from '@reduxjs/toolkit'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import { IResponseUser, IResponseUsers, IUser } from '../../types/user'
import { apiSlice } from '../api'

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

const usersAPI = apiSlice.injectEndpoints({
  endpoints: build => ({
    createUser: build.mutation<IUser, IUser>({
      query: body => ({
        url: 'users',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Users'],
    }),
    getUsers: build.query<IResponseUsers, void>({
      query: () => `users`,
      providesTags: ['Users'],
    }),
    removeUser: build.mutation<number, boolean>({
      query: id => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),
    }),
    updateUser: build.mutation<IResponseUser, IUser>({
      query: ({ id, ...body }) => ({
        url: `users/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Users'],
    }),
  }),
  // overrideExisting: false,
})

export const { useCreateUserMutation, useGetUsersQuery, useRemoveUserMutation, useUpdateUserMutation } = usersAPI
