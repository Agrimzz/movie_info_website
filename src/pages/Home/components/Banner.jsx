import "./banner.css"
import { Link } from "react-router-dom"

const Banner = ({ image, title, details, date, id }) => {
  const truncatedDetails =
    details.length > 200 ? `${details.slice(0, 200)}...` : details
  return (
    <div className="app__banner">
      <div className="app__banner-image">
        <img
          src={`https://image.tmdb.org/t/p/w500${image}`}
          alt=""
          draggable="false"
        />
      </div>
      <div className="app__banner-text">
        <h2>{title}</h2>
        <p className="banner-date">{date}</p>
        <p className="banner-details">{truncatedDetails}</p>
        <Link to={`/movie/${id}`}>
          <button>Vew More</button>
        </Link>
      </div>
    </div>
  )
}

export default Banner
