import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCreatePredictionMutation } from '../../../app/actions/prediction'
import { useGetWalletQuery } from '../../../app/actions/wallet'
import { selectToken, selectUser } from '../../../app/api/userSlice'
import { useAppSelector } from '../../../app/hooks'
import { ICalendar } from '../../../types/calendar'
import { IPrediction } from '../../../types/prediction'
import { ITicket } from '../../../types/ticket'
export interface TicketInterface {
  predictions: IPrediction[]
  calendars: ICalendar[]
}

const Ticket: React.FC<TicketInterface> = ({ predictions, calendars }) => {
  const [createPrediction, { isSuccess }] = useCreatePredictionMutation()
  const token = useAppSelector(selectToken)
  const user = useAppSelector(selectUser)
  const { data } = useGetWalletQuery(token)

  const [toggle, setToggle] = useState(false)
  const [ticket, setTicket] = useState<ITicket>({
    price: 5,
    pro: false,
  })
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState([''])

  const handlePro = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTicket({
      ...ticket,
      pro: !ticket.pro,
    })
  }

  const handleComprar = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (user === null) {
      setShowAlert(true)
      setAlertMessage(['Debes iniciar sesión para comprar tickets', 'Ir a loearme'])
      return
    }
    if (data?.wallet && data?.wallet.balance && data.wallet.balance < ticket.price) {
      setShowAlert(true)
      setAlertMessage(['No tienes suficiente saldo.', 'Ir a recargarme'])
    }

    await createPrediction({
      predictions,
      ticket,
      token,
    })
  }

  return (
    <div className="w-full gap-1 sm:grid sm:place-content-center bg-gray-200">
      <h3 className="font-medium text-gray-500 text-center text-[10px] pt-2">
        POLLA Nº {calendars[0]?.journeyId ?? ''}
      </h3>
      <h3 className="font-medium text-gray-500 text-center text-[10px] pt-2">Mis Predicciones</h3>
      <div className="flex text-gray-600 items-center justify-between text-[10px] px-1 pt-1 ">
        <p>
          Nº <span className="px-6">Local</span> <span className="px-6">Visitante</span>
        </p>

        <p className="">Resultado</p>
      </div>
      {predictions.map(p => (
        <div key={crypto.randomUUID()} className={'flex text-[8px] items-center justify-between gap-2 px-1'}>
          <p>
            {calendars.find(c => c?.id === p.calendarId)?.number} -{' '}
            <span>
              {calendars.find(c => c?.id === p.calendarId)?.homeTeam?.name} -{' '}
              {calendars.find(c => c?.id === p.calendarId)?.awayTeam?.name}
            </span>
          </p>
          <span>{p.result}</span>
        </div>
      ))}

      {predictions.some(p => p.result === '') ? (
        <p className="text-rose-600 p-2">Faltan datos: No puedes generar tu ticket</p>
      ) : (
        <p className="text-green-600 p-2">Datos correctos: Ya puedes generar tu ticket</p>
      )}
      <div className="grid place-items-center p-2 hover:text-white">
        <button
          className="disabled:cursor-not-allowed flex items-center px-6 py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800  border-2 border-gray-900 focus:outline-none hover:text-white text-gray-900"
          disabled={predictions.some(p => p.result === '')}
          onClick={() => setToggle(true)}
        >
          <svg
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 2304 1792"
            className="mr-4"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1728 448l-384 704h768zm-1280 0l-384 704h768zm821-192q-14 40-45.5 71.5t-71.5 45.5v1291h608q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1344q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h608v-1291q-40-14-71.5-45.5t-45.5-71.5h-491q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h491q21-57 70-92.5t111-35.5 111 35.5 70 92.5h491q14 0 23 9t9 23v64q0 14-9 23t-23 9h-491zm-181 16q33 0 56.5-23.5t23.5-56.5-23.5-56.5-56.5-23.5-56.5 23.5-23.5 56.5 23.5 56.5 56.5 23.5zm1088 880q0 73-46.5 131t-117.5 91-144.5 49.5-139.5 16.5-139.5-16.5-144.5-49.5-117.5-91-46.5-131q0-11 35-81t92-174.5 107-195.5 102-184 56-100q18-33 56-33t56 33q4 7 56 100t102 184 107 195.5 92 174.5 35 81zm-1280 0q0 73-46.5 131t-117.5 91-144.5 49.5-139.5 16.5-139.5-16.5-144.5-49.5-117.5-91-46.5-131q0-11 35-81t92-174.5 107-195.5 102-184 56-100q18-33 56-33t56 33q4 7 56 100t102 184 107 195.5 92 174.5 35 81z"></path>
          </svg>
          <span className="font-bold">Generar ticket</span>
        </button>
      </div>

      {toggle && (
        <>
          <div className="relative">
            <div className="z-30 fixed top-0 left-0 w-full min-h-screen bg-black/50"></div>
            <div className="z-40 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-72 p-4 bg-indigo-500 shadow-lg rounded-2xl dark:bg-gray-800">
              <div className="flex items-center justify-between text-white">
                <p className="mb-4 text-4xl font-medium">POLLA</p>
                <p className="flex flex-col text-3xl font-bold">
                  S/{ticket.pro ? ticket.price + 5 : ticket.price}.00
                  <span className="text-sm font-thin text-right">Total</span>
                </p>
              </div>
              <p className="mt-4 text-white text-xs font-semibold">
                ¿Deseas participar del reventon por 5 soles adicionales?
              </p>
              <div>
                <div className="mb-3">
                  <div className="relative inline-block w-10 mr-2 align-middle select-none my-2">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="Reventon"
                      checked={ticket.pro}
                      className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-gray-600 border-4 appearance-none cursor-pointer"
                      onChange={handlePro}
                    />
                    <label
                      htmlFor="Reventon"
                      className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                    ></label>
                  </div>
                  <span className={`${ticket.pro ? ' text-blue-500' : ' text-white'} text-xs font-medium`}>
                    Reventon
                  </span>
                </div>
              </div>
              <ul className="w-full mt-6 mb-6 text-sm text-white  text-[12px]">
                <li className="mb-3 flex items-center py-2">
                  <svg
                    className="w-1/5 h-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={6}
                    height={6}
                    stroke="currentColor"
                    fill="white"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                  </svg>
                  <p className="w-5/6 h-6">Reventon S/. 500.00 addicionales si aciertas todas</p>
                </li>

                <li className="mb-3 flex items-center py-2 ">
                  <svg
                    className="w-1/5 h-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={6}
                    height={6}
                    stroke="currentColor"
                    fill="white"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                  </svg>
                  <p className="w-5/6 h-6">Revisa tus datos antes de finalizar tu compra</p>
                </li>
                <li className="mb-3 flex items-center py-2 ">
                  <svg
                    className="w-1/5 h-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={6}
                    height={6}
                    stroke="currentColor"
                    fill="white"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                  </svg>
                  <p className="w-5/6 h-6">Gana el que tenga mas aciertos al final de la fecha</p>
                </li>
                <li className="mb-3 flex items-center py-2">
                  <svg
                    className="w-1/5 h-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={6}
                    height={6}
                    stroke="currentColor"
                    fill="white"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                  </svg>
                  <p className="w-5/6 h-6">
                    Reventon auspiciado por{' '}
                    <span className="text-blue-400 font-medium">CORPORACIÓN SANTOS B&R SAC</span>
                  </p>
                </li>
              </ul>
              {showAlert && (
                <div className="bg-yellow-200 border-yellow-600 text-yellow-600 border-l-4 p-4" role="alert">
                  <p className="font-bold">Alerta</p>
                  <p>{alertMessage[0]}</p>
                  <Link to="/login" className="text-blue-500 hover:text-blue-600 text-base underline">
                    {alertMessage[1]}
                  </Link>
                </div>
              )}

              <button
                onClick={handleComprar}
                className="my-2 w-full px-3 py-3 text-sm bg-green-500 text-white rounded-lg shadow  hover:scale-105"
              >
                COMPRAR
              </button>
              <button
                onClick={() => setToggle(false)}
                className="my-2 bg-rose-600 w-full px-3 py-3 text-sm text-white rounded-lg shadow hover:scale-105"
              >
                CANCELAR
              </button>
            </div>
            {isSuccess && (
              <div className="z-50 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full min-h-screen bg-black/50 ">
                <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-64 p-4 m-auto bg-white shadow-lg rounded-2xl dark:bg-gray-800">
                  <div className="w-full h-full text-center">
                    <div className="flex flex-col justify-between h-full">
                      <svg
                        className="w-12 h-12 m-auto mt-4 text-green-500"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                      </svg>
                      <h3 className="text-lg font-semibold text-green-500">Exito!</h3>
                      <p className="px-6 py-2 text-gray-600 dark:text-gray-100 text-md">Polla comprada con exito.</p>
                      <div className="flex items-center justify-between w-full gap-4 mt-8">
                        <button
                          onClick={() => setToggle(false)}
                          className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default Ticket
