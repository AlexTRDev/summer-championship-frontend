import { IRequestWallet, IResponseWallet, IResponseWallets } from '../../types/wallet'
import { apiSlice } from '../api'

const walletAPI = apiSlice.injectEndpoints({
  endpoints: build => ({
    // createWallet: build.mutation<IWallet, IWalletRequest>({
    //   query: ({ token, ...body }) => ({
    //     url: 'wallets/bulk',
    //     method: 'POST',
    //     body,
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Authorization: `Bearer ${token}`,
    //     },
    //   }),
    //   invalidatesTags: ['Wallets'],
    // }),
    getWallet: build.query<IResponseWallet, string>({
      query: token => ({
        url: `wallets/user/`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ['Wallet'],
    }),
    getWalletByAdmin: build.query<IResponseWallet, IRequestWallet>({
      query: ({ token, userId }) => ({
        url: `wallets/admin/${userId}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ['Wallet'],
    }),
    getWallets: build.query<IResponseWallets, string>({
      query: token => ({
        url: `wallets`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ['Wallets'],
    }),
    // removeWallet: build.mutation<number, boolean>({
    //   query: id => ({
    //     url: `wallets/${id}`,
    //     method: 'DELETE',
    //   }),
    // }),
    updateWallet: build.mutation<IResponseWallet, IRequestWallet>({
      query: ({ token, balance, walletId }) => ({
        url: `wallets/${walletId}`,
        method: 'PATCH',
        body: {
          balance,
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['Wallets'],
    }),
  }),
  overrideExisting: false,
})

export const { useGetWalletQuery, useUpdateWalletMutation, useGetWalletsQuery } = walletAPI
