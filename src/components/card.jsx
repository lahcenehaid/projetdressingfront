function Card({ title, description, image }) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transition transform hover:scale-105 duration-300">
      
      {/* Image */}
      <div className="w-full h-56 bg-white flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="max-h-full max-w-full object-contain p-4"
        />
      </div>

      {/* Texte centré */}
      <div className="p-4 text-center">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>

    </div>
  )
}

export default Card
