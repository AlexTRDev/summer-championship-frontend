import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

import { auth, googleAuthProvider } from '../../../firebase'

export interface SignInInterface {}

const SignIn: React.FC<SignInInterface> = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })
  window.scrollTo({ top: 0, behavior: 'smooth' })
  const location = useLocation().pathname
  const navigate = useNavigate()

  const handleUser = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      navigate('/LaPolla')
    } catch (error) {
      console.error(error)
    }
  }

  const handleSigInCorreo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
      navigate('/LaPolla')
    } catch (error) {
      console.error(error)
    }
  }

  const handleSignInGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider)
      navigate('/LaPolla')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div className="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
          <div className="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
            <div className="w-full px-6 py-3">
              <div>
                <div className="mt-3 text-left sm:mt-5">
                  <div className="inline-flex items-center w-full">
                    <h3 className="text-2xl font-bold text-neutral-600 leading-6 lg:text-5xl">
                      {location === '/register' ? 'Registro' : 'Iniciar sesion'}
                    </h3>
                  </div>
                  <div className="mt-4 text-base text-gray-500">
                    <p>
                      {location === '/register'
                        ? 'Crea tu cuenta y accede a todos los servicios de nuestra plataforma...'
                        : 'Inicia cesion en tu cuenta asociada...'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-2 ">
                <form onSubmit={location === '/register' ? handleSigInCorreo : handleLogin}>
                  <div className="my-2">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      placeholder="Ingresa tu email"
                      onChange={handleUser}
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      placeholder="Ingresa tu password"
                      onChange={handleUser}
                    />
                  </div>
                  <div className="flex flex-col mt-4 lg:space-y-2">
                    <button
                      className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      // onClick={location === '/register' ? handleSigInCorreo : handleLogin}
                    >
                      {location === '/register' ? 'Registrarse' : 'Iniciar sesión'}
                    </button>
                    {/* <Link
                      to={'/recuperar-contraseña'}
                      className="inline-flex justify-center py-4 text-base font-medium text-gray-500 focus:outline-none hover:text-neutral-600 focus:text-blue-600 sm:text-sm"
                    >
                      {' '}
                      Olvidaste tu contraseña?{' '}
                    </Link> */}
                    <Link
                      to={location === '/register' ? '/login' : '/register'}
                      className="inline-flex justify-center py-4 text-base font-medium text-gray-500 focus:outline-none hover:text-neutral-600 focus:text-blue-600 "
                    >
                      {location === '/register' ? '¿Ya tienes una cuenta?' : '¿No tienes una cuenta?'}
                    </Link>
                  </div>
                </form>
                <div>
                  <button
                    className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    onClick={handleSignInGoogle}
                  >
                    <div className="flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        className="w-6 h-6"
                        viewBox="0 0 48 48"
                      >
                        <defs>
                          <path
                            id="a"
                            d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                          />
                        </defs>
                        <clipPath id="b">
                          <use xlinkHref="#a" overflow="visible" />
                        </clipPath>
                        <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                        <path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                        <path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                        <path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
                      </svg>
                      <span className="ml-4"> Iniciar con Google</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="order-first hidden w-full lg:block">
              <img
                className="object-cover h-full bg-cover rounded-l-lg"
                src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
                alt="sd"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignIn
