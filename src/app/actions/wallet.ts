import { IResponseWallet, IWallet } from '../../types/wallet'
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
    // getWallets: build.query<IResponseWallets, void>({
    //   query: () => 'wallets',
    //   providesTags: ['Wallets'],
    // }),
    // removeWallet: build.mutation<number, boolean>({
    //   query: id => ({
    //     url: `wallets/${id}`,
    //     method: 'DELETE',
    //   }),
    // }),
    updateWallet: build.mutation<IResponseWallet, IWallet>({
      query: body => ({
        url: `wallets`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Wallet'],
    }),
  }),
  overrideExisting: false,
})

export const { useGetWalletQuery, useUpdateWalletMutation } = walletAPI
