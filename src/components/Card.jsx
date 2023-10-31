import "./card.css"

const Card = ({ title, date, image, rating }) => {
  return (
    <div className="app__card">
      <div className="app__card-img">
        <img src={`https://image.tmdb.org/t/p/original${image}`} alt="" />
      </div>
      <div className="app__card-details">
        <h2>{title}</h2>
        <p>{date}</p>
        <p>Rating: {rating}</p>
      </div>
    </div>
  )
}

export default Card
