import { useState, useRef } from "react"
import Card from "../../components/Card"
import Navbar from "../../components/Navbar"
import "./home.css"
import axios from "axios"
import { useEffect } from "react"
import { FaAngleLeft } from "react-icons/fa"
import { FaAngleRight } from "react-icons/fa"

const Home = () => {
  const [data, setData] = useState([])
  const sliderRef = useRef(null)

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

  const slideLeft = () => {
    var slider = document.getElementById("slider")
    slider.scrollLeft = slider.scrollLeft - 316
  }

  const slideRight = () => {
    var slider = document.getElementById("slider")
    slider.scrollLeft = slider.scrollLeft + 316
  }

  useEffect(() => {
    const autoScroll = setInterval(() => {
      slideRight()
      if (
        sliderRef.current.scrollLeft >=
        sliderRef.current.scrollWidth - sliderRef.current.clientWidth
      ) {
        sliderRef.current.scrollLeft = 0
      }
    }, 3000)

    return () => {
      clearInterval(autoScroll)
    }
  }, [])

  return (
    <div>
      <Navbar />
      <section className="wrapper">
        <h1 className="trend">Trending Movies This Week</h1>

        <div className="slider-container" id="slider-container">
          <FaAngleLeft
            size={70}
            className="slide-icon icon-left"
            onClick={slideLeft}
          />
          <div className="slider" id="slider" ref={sliderRef}>
            <div className="trend-box">
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
            </div>
          </div>
          <FaAngleRight
            size={70}
            className="slide-icon icon-right"
            onClick={slideRight}
          />
        </div>
      </section>
    </div>
  )
}

export default Home
