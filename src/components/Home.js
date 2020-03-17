import React from 'react'

const Home = ({ games }) => {
  console.log(games)
  const [startGame, setStartGame] = React.useState(false)

  function handleClickStart({ games }) {
    setStartGame(!startGame)
  }

  function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(games.length))
  }

  const gameIndex = getRandomInt()
  const { question, choice1, choice2, choice3 } = games[gameIndex]

  let choiceArr = [choice1, choice2, choice3]
  console.log(choiceArr)

  // TODO - shuffle choiceArr
  /**
   * Credit: Ronald Fisher and Frank Yates in 1938
   * Credit: Richard Durstenfeld 1964
   * URL: https://www.frankmitchell.org/2015/01/fisher-yates/
   *
   * @param array
   */
  function shuffleArray (array) {
    let i = 0
      , j = 0
      , temp = null

    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  }
  shuffleArray(choiceArr)
  console.log(choiceArr)

  // TODO - ES6 map to display
  // TODO - Create Interface

  return (
    <div className="App">
      <h1>Hello, Do You Want to Play a Game?</h1>
      <p>Opening notes and intro text</p>
      <button onClick={handleClickStart}>Click to Start a Game</button>
      <div>
        <p><strong>{question}</strong></p>
        <p>{choice1}</p>
        <p>{choice2}</p>
        <p>{choice3}</p>
      </div>

    </div>
  )
}

export default Home
