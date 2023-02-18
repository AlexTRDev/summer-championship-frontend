import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { IUser } from '../../types/user'
import { getUser, setUser } from '../actions'

// Define a type for the slice state
interface UserState {
  user: IUser | null
  loading: boolean | null
  token: string
}

// Define the initial state using that type
const initialState: UserState = {
  user: null,
  loading: null,
  token: '',
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUser.pending, state => {
        state.loading = true
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.user = payload.user
        state.loading = false
        state.token = payload.token
      })
      .addCase(getUser.rejected, state => {
        state.loading = false
      })

    builder
      .addCase(setUser.pending, state => {
        state.loading = true
      })
      .addCase(setUser.fulfilled, (state, { payload }) => {
        state.user = payload.user
        state.loading = false
        state.token = payload.token
      })
      .addCase(setUser.rejected, state => {
        state.loading = false
      })
  },
})

export const { setLoading } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.userStore.user
export const selectToken = (state: RootState) => state.userStore.token

export default userSlice.reducer
