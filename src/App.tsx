import { useEffect, useState } from 'react'
import { Logos } from './components/Logos'

function App() {
  const [teams, setTeams] = useState([])
  useEffect(() => {
    const fetchURL = async () => {
      const data = await fetch('http://localhost:3500/teams')
      const results = await data.json()
      setTeams(results)
    }

    fetchURL()
  }, [])

  return <Logos teams={teams} />
}

export default App
