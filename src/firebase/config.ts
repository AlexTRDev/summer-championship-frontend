// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const KEY = import.meta.env.VITE_FIREBASE_KEY
const DOMAIN = import.meta.env.VITE_FIREBASE_DOMAIN
const ID = import.meta.env.VITE_FIREBASE_ID
const STORAGE = import.meta.env.VITE_FIREBASE_STORAGE
const MESSAGING = import.meta.env.VITE_FIREBASE_MESSAGING
const APP = import.meta.env.VITE_FIREBASE_APP
const MEASUREMENT = import.meta.env.VITE_FIREBASE_MEASUREMENT

const firebaseConfig = {
  apiKey: KEY,
  authDomain: DOMAIN,
  projectId: ID,
  storageBucket: STORAGE,
  messagingSenderId: MESSAGING,
  appId: APP,
  measurementId: MEASUREMENT,
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const auth = getAuth(app)
export const googleAuthProvider = new GoogleAuthProvider()
