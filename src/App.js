import React from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes'

function App() {
  const [games, setGames] = React.useState(null)

  React.useEffect(() => {
    fetch('http://localhost:3000/games')
      .then(res => res.json())
      .then(games => {
        setGames(games)
      })
  }, [])

  if (!games) {
    return <div />
  }

  return <AppRoutes games={games} />
}

export default App
