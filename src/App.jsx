import { useState } from 'react'

import './App.css'
import Card from './components/card'

function App() {
  const [search, setSearch] = useState("")
  const [showInput, setShowInput] = useState(false)

  // formulaire d'ajout
  const [newTitle, setNewTitle] = useState("")
  const [newDescription, setNewDescription] = useState("")
  const [newImage, setNewImage] = useState("")

  // cards en state 
  const [cards, setCards] = useState([
    { id: 1, title: "Bas Jogging Stone island", description: "Bas de jogging 100% cotton", image: "https://hh84n94hcl.ufs.sh/f/GM7nKIBBdnSQBcVcFSyayKH0ptNIURXdOnf71J4GMZqe8WhP" },
    { id: 2, title: "Veste sans manches Stone island", description: "Veste sans manches technique", image: "https://hh84n94hcl.ufs.sh/f/GM7nKIBBdnSQbHmsk672dVrRhKQaPyYNnjz0lX1gDk4EiMLB" },
    { id: 3, title: "Sweat a capuche Stone island", description: "Sweat a capuche 100% cotton", image: "https://hh84n94hcl.ufs.sh/f/GM7nKIBBdnSQLjZvxoeC0T1gHoQhJbsv2jYGxyFcNP8Vki4p" },
    { id: 4, title: "Short Stone island", description: "Short 100% cotton", image: "https://hh84n94hcl.ufs.sh/f/GM7nKIBBdnSQcPkvsQz910uoaXvOQSWrmPnTAzhs28xNb5Kd" },
    { id: 5, title: "Sweat a capuche Stone island", description: "Sweat a capuche cotton", image: "https://hh84n94hcl.ufs.sh/f/GM7nKIBBdnSQkoNhM3KqDN6LWgK1FOxP7U9Z43IB5VqYyCMk" },
    { id: 6, title: "Sweat a capuche Stone island", description: "Sweat a capuche cotton", image: "https://hh84n94hcl.ufs.sh/f/GM7nKIBBdnSQi4KiGGnpRmuY4nU08zqbDsJtTe5c91VvABPg" },
    { id: 7, title: "T-shirt Dior Oblique", description: "Tshirt avec signe oblique", image: "https://hh84n94hcl.ufs.sh/f/GM7nKIBBdnSQLIU4v0eC0T1gHoQhJbsv2jYGxyFcNP8Vki4p" },
  ])

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(search.toLowerCase()) ||
    card.description.toLowerCase().includes(search.toLowerCase())
  )

  // Ajouter une carte
  const handleAdd = () => {
    if (!newTitle.trim()) return

    const cardToAdd = {
      id: Date.now(),
      title: newTitle,
      description: newDescription,
      image: newImage || "https://via.placeholder.com/400"
    }

    setCards(prev => [...prev, cardToAdd])

    // reset inputs + ferme
    setNewTitle("")
    setNewDescription("")
    setNewImage("")
    setShowInput(false)
  }

  // Supprimer une carte
  const handleDelete = (id) => {
    setCards(prev => prev.filter(card => card.id !== id))
  }

  return (
    <div className="relative min-h-screen">

      <div
        className="absolute inset-0 bg-cover bg-center blur-sm -z-10"
        style={{ backgroundImage: "url('/cloudy.png')" }}
      />


      <div className="absolute inset-0 bg-white/30 -z-10" />

      <header className="title">
        <h1 className="text-6xl font-extrabold text-center mb-8 tracking-tight">
          ☁️ My Cloudy Dressing ☁️
        </h1>


        <form className="flex justify-center items-center gap-2">
          <input
            type="text"
            placeholder="Rechercher un vêtement"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="button"
            onClick={() => setShowInput(prev => !prev)}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            {showInput ? "Fermer" : "Ajouter"}
          </button>
        </form>


        {showInput && (
          <div className="flex justify-center mt-4">
            <div className="bg-white p-4 rounded-xl shadow-lg w-80 space-y-3">

              <input
                type="text"
                placeholder="Titre"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Description"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Image (URL)"
                value={newImage}
                onChange={(e) => setNewImage(e.target.value)}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* boutons sous les inputs */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleAdd}
                  className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                >
                  Ajouter
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setNewTitle("")
                    setNewDescription("")
                    setNewImage("")
                  }}
                  className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  Supp
                </button>
              </div>

            </div>
          </div>
        )}
      </header>

      <h2 className="text-3xl font-bold text-center mt-8 mb-6">
        My Dressing
      </h2>

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {filteredCards.map(card => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
            onDelete={() => handleDelete(card.id)}   // ✅ bouton supprimer
          />
        ))}
      </main>

      <footer className="text-center py-6">
        <p>&copy; 2026 My dressing Page</p>
      </footer>

    </div>
  )
}

export default App
