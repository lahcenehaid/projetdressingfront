function Card({ title, description, image, onDelete }) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transition transform hover:scale-105 duration-300">

      {/* Image (entière) */}
      <div className="w-full h-64 bg-white flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain p-4"
        />
      </div>

      {/* Texte centré */}
      <div className="p-4 text-center">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>

        {/* bouton supprimer seulement si onDelete existe */}
        {onDelete && (
          <button
            type="button"
            onClick={onDelete}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Supprimer
          </button>
        )}
      </div>
    </div>
  )
}

export default Card