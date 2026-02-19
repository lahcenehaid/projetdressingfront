function Card({ title, image, description }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">
          {title}
        </h2>

        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
