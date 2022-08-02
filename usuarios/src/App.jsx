import { useState } from 'react'
import './App.css'
import CardUsers from './components/CardUsers'
import users from './json/users.json'


function App() {

  const getRandomElement = arr => {

    const random = Math.floor(Math.random() * arr.length)

    console.log(random)

  }

  getRandomElement(users)

  const [randomUser, setRandomUser] = useState()

  console.log(users)

  return (
    <div className="App">

      <CardUsers />
      
    </div>
  )
}

export default App
