import { useState } from 'react'

import './App.css'
import Card from './components/card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="title">
      <h1> My Cloudy Dressing</h1>
      <form className="addClothes" action="/traitement" method="post">
        <input type="text" placeholder="Add Items"/>
        <button className="btn" type="submit">Ajouter</button>
      </form>
    </header>
    <h2 className="namelist">My Dressing</h2>
    
    <main>
      <Card 
      image="https://hh84n94hcl.ufs.sh/f/GM7nKIBBdnSQBcVcFSyayKH0ptNIURXdOnf71J4GMZqe8WhP"
      description="Ceci est la première carte" />
      <Card 
      image="https://hh84n94hcl.ufs.sh/f/GM7nKIBBdnSQbHmsk672dVrRhKQaPyYNnjz0lX1gDk4EiMLB"
      description="Voici une deuxième carte"
      />
    </main>

    <footer>
      <p>&copy; 2026 My dressing Page</p>
    </footer>

    </>
  )
}

export default App
