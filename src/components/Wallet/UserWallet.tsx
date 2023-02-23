import { useEffect, useState } from 'react'
import { useGetWalletsQuery, useUpdateWalletMutation } from '../../app/actions'
import { selectToken } from '../../app/api/userSlice'
import { useAppSelector } from '../../app/hooks'
import { Loader } from '../Loader'

export interface IUserWalletProps {
  userId: number
}

const UserWallet: React.FC<IUserWalletProps> = ({ userId }) => {
  const [balance, setBalance] = useState(0)

  const token = useAppSelector(selectToken)
  const { data, isLoading, error } = useGetWalletsQuery(token)
  const [updateWallet] = useUpdateWalletMutation()

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    await updateWallet({
      token,
      walletId: data?.wallets.find(w => w.userId === userId)?.id,
      balance,
      userId,
    })
    alert('Balance actualizado')
  }

  useEffect(() => {
    if (userId) {
      setBalance(data?.wallets.find(w => w.userId === userId)?.balance ?? 0)
    }
  }, [data?.wallets, userId])

  if (isLoading) return <Loader />
  if (error) return <h1 className="text-gray-500 text-xl font-medium">... Error en la petición ...</h1>

  return (
    <div className="flex flex-col items-start justify-center gap-y-2 p-2 text-gray-500">
      <label htmlFor="price" className="block text-sm font-medium text-gray-500">
        Price
      </label>
      <div className="relative mt-1 rounded-md shadow-sm w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div>
        <input
          type="number"
          name="price"
          id="price"
          className="form-input block w-full px-4 py-2 pr-12 border-t border-b border-l border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 pl-7 sm:text-sm"
          placeholder={'0.00'}
          value={balance}
          onChange={e => setBalance(Number(e.target.value))}
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
          <select
            id="Currency"
            name="currency"
            className="h-full px-4 py-2 pl-2 text-gray-500 bg-transparent border-t border-b border-r border-transparent border-gray-300 focus:ring-indigo-500 bo focus:border-indigo-500 pr-7 sm:text-sm rounded-r-md"
          >
            <option>USD</option>
          </select>
        </div>
      </div>
      <button
        type="button"
        className="py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        onClick={handleSubmit}
      >
        Guardar
      </button>
    </div>
  )
}

export default UserWallet
