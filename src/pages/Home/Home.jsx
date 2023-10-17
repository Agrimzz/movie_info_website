import { useState } from "react"
import Card from "../../components/Card"
import Navbar from "../../components/Navbar"
import "./home.css"
import axios from "axios"
import { useEffect } from "react"
import { FaAngleLeft } from "react-icons/fa"
import { FaAngleRight } from "react-icons/fa"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

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

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1800 },
      items: 5,
      slidesToSlide: 2,
      partialVisibilityGutter: 20,
    },
    desktop1: {
      breakpoint: { max: 2000, min: 1600 },
      items: 4,
      partialVisibilityGutter: 20,
    },
    tablet: {
      breakpoint: { max: 1600, min: 800 },
      items: 2,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
    },
  }

  return (
    <div>
      <Navbar />
      <section className="wrapper">
        <h1 className="trend">Trending Movies This Week</h1>
        <Carousel
          responsive={responsive}
          className="app__trending"
          autoPlay={true}
          autoPlaySpeed={3000}
          rewind
          rewindWithAnimation="all 1s"
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          partialVisible={true}
        >
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
        </Carousel>
      </section>
    </div>
  )
}

export default Home
