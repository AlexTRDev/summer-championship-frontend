import React, { useState } from 'react'
import { useGetUsersQuery } from '../../app/actions'
import { Loader } from '../Loader'
import UserWallet from './UserWallet'
export interface WalletInterface {}

const Wallet: React.FC<WalletInterface> = () => {
  const [userId, setUserId] = useState(0)

  const { data, isLoading, error } = useGetUsersQuery()

  if (isLoading) return <Loader />
  if (error) return <h1 className="text-gray-500 text-xl font-medium">... Error en la petición ...</h1>

  return (
    <div className="text-gray-500 p-2">
      <h3 className="text-black font-medium text-lg mb-2">Billeteras digitales</h3>
      <select className="w-full" name="wallets" value={userId} onChange={e => setUserId(Number(e.target.value))}>
        <option value={0} disabled>
          Elije usuario
        </option>
        {data?.users.map(user => (
          <option key={crypto.randomUUID()} value={user.id}>
            {user.name ?? user.email}
          </option>
        ))}
      </select>

      {userId !== 0 && <UserWallet userId={userId} />}
    </div>
  )
}

export default Wallet
