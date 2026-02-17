import { useState } from 'react'

import './App.css'
import Card from './components/card'


function App() {
  const [search, setSearch] = useState(""); 

  const cards = [
    { id: 1, title: "Bas Jogging Stone island", description: "Bas de jogging 100% cotton", image: "https://hh84n94hcl.ufs.sh/f/GM7nKIBBdnSQBcVcFSyayKH0ptNIURXdOnf71J4GMZqe8WhP" },
    { id: 2, title: "Veste sans manches Stone island", description: "Veste sans manches technique", image: "https://hh84n94hcl.ufs.sh/f/GM7nKIBBdnSQbHmsk672dVrRhKQaPyYNnjz0lX1gDk4EiMLB" },
    { id: 3, title: "Sweat a capuche Stone island", description: "Sweat a capuche 100% cotton", image: "https://hh84n94hcl.ufs.sh/f/GM7nKIBBdnSQLjZvxoeC0T1gHoQhJbsv2jYGxyFcNP8Vki4p" },
    { id: 4, title: "Short Stone island", description: "Short 100% cotton", image: "https://hh84n94hcl.ufs.sh/f/GM7nKIBBdnSQcPkvsQz910uoaXvOQSWrmPnTAzhs28xNb5Kd" },
    { id: 5, title: "Sweat a capuche Stone island", description: "Sweat a capuche cotton", image: "https://hh84n94hcl.ufs.sh/f/GM7nKIBBdnSQkoNhM3KqDN6LWgK1FOxP7U9Z43IB5VqYyCMk" },
    { id: 6, title: "Sweat a capuche Stone island", description: "Sweat a capuche cotton", image: "https://hh84n94hcl.ufs.sh/f/GM7nKIBBdnSQi4KiGGnpRmuY4nU08zqbDsJtTe5c91VvABPg" },
    { id: 7, title: "T-shirt Dior Oblique", description: "Tshirt avec signe oblique", image: "https://hh84n94hcl.ufs.sh/f/GM7nKIBBdnSQLIU4v0eC0T1gHoQhJbsv2jYGxyFcNP8Vki4p" },
  ];

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <header className="title">
        <h1> My Cloudy Dressing</h1>
        <form className="addClothes" action="/traitement" method="post">
          <input
            type="text"
            placeholder="Rechercher un vêtement"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button className="btn" type="submit">Ajouter</button>
        </form>
      </header>

      <h2 className="namelist">My Dressing</h2>

      <main>
        {filteredCards.map(card => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </main>

      <footer>
        <p>&copy; 2026 My dressing Page</p>
      </footer>
    </>
  )
}

export default App
