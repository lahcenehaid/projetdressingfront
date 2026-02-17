export default Card;
function Card({ image, description }) {
  return (
    <div className="card">
      <img src={image} alt="illustration" />
      <p>{description}</p>
    </div>
  );
}
