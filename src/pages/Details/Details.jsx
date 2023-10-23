import { useParams } from "react-router-dom"
import Navbar from "../../components/Navbar"
import "./details.css"
import { useEffect, useState } from "react"
import axios from "axios"

const Details = (props) => {
  const { id } = useParams()
  console.log(id)
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=a212d2a534451bb967da7b23e8a592c1`
      )
      .then((response) => {
        if (response) {
          console.log(response.data)
          setData(response.data)
        }
      })
  }, [])
  return (
    <div>
      <Navbar />
      <div className="wrapper app__details">
        <div className="app__details">
          <div className="app__details-image">
            <img
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt=""
            />
          </div>
          <div className="app__details-text">
            <h2 className="movie-title">{data.title}</h2>
            <div className="movie-info">
              <p>{data.release_date}</p>
              {data.genres && data.genres.length > 0 && (
                <div className="movie-genre">
                  {data.genres.map((item, index) => (
                    <div key={index}>
                      <p>
                        {item.name}
                        {index !== data.genres.length - 1 ? "," : ""}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              <p>{data.runtime} mins</p>
            </div>
            <p className="movie-tagline">{data.tagline}</p>
            <p className="movie-overview">{data.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
