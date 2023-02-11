import { useNavigate, useParams } from 'react-router'
import { users } from '../../assets/info/data'

function ShowVoucher() {
  const { codigo } = useParams()
  const navigate = useNavigate()
  return (
    <div className="h-full w-full flex flex-col gap-4 p-4">
      <div className="">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-500 text-start border-b border-gray-500 hover:text-blue-500 hover:border-blue-500"
        >
          volver
        </button>
      </div>

      <picture>
        <img src={users.find(user => user.codigo === codigo)?.boleto} alt="boleto de compra" />
      </picture>
    </div>
  )
}

export default ShowVoucher
