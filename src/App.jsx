import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header classname="title">
      <h1> My Cloudy Dressing</h1>
      <form classname="addClothes" action="/traitement" method="post">
        <input type="text" placeholder="Add Items"/>
        <button classname="btn" type="submit">Ajouter</button>
      </form>
    </header>
    <h2 classname="namelist">My Dressing</h2>
    <script type="module" src="/src/main.jsx"></script>
    <footer>
      <p>&copy; 2026 My dressing Page</p>
    </footer>

    </>
  )
}

export default App
