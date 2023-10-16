import { useState } from "react"
import Card from "../../components/Card"
import Navbar from "../../components/Navbar"
import "./home.css"
import axios from "axios"
import { useEffect } from "react"
import { FaAngleLeft } from "react-icons/fa"
import { FaAngleRight } from "react-icons/fa"

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=a212d2a534451bb967da7b23e8a592c1"
      )
      .then((response) => {
        if (response) {
          setData(response.data.results)
        }
      })
  }, [])

  return (
    <div>
      <Navbar />
      <section className="wrapper">
        <h1 className="trend">Trending Movies This Week</h1>
        <div className="app__trending">
          {data.length > 0 &&
            data.map((item, index) => {
              console.log(item.poster_path)
              return (
                <Card
                  key={index}
                  title={item.title}
                  date={item.release_date}
                  image={item.poster_path}
                  rating={item.vote_average}
                />
              )
            })}
        </div>
      </section>
    </div>
  )
}

export default Home
