import { useState, useRef } from "react"
import Card from "../../components/Card"
import Navbar from "../../components/Navbar"
import "./home.css"
import axios from "axios"
import { useEffect } from "react"
import { FaAngleLeft } from "react-icons/fa"
import { FaAngleRight } from "react-icons/fa"
import { HiOutlineSearch } from "react-icons/hi"
import Banner from "./components/Banner"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { Link } from "react-router-dom"

const Home = () => {
  const [data, setData] = useState([])
  const [banner, setBanner] = useState([])
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

    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=a212d2a534451bb967da7b23e8a592c1"
      )
      .then((response) => {
        setBanner(response.data.results.slice(0, 10))
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

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <div>
      <Navbar />
      <section className="wrapper">
        <div className="search-container">
          <p className="search-text">Search for movies!</p>
          <div className="app__search">
            <form action="">
              <input
                type="text"
                placeholder="Search"
                className="input-search"
              />
            </form>

            <HiOutlineSearch size={40} className="icon-search" />
          </div>
        </div>
      </section>
      <section className="wrapper">
        <h1 className="trend">Now Playing</h1>
        <Carousel
          className="banner-container"
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={6000}
          infinite={true}
          removeArrowOnDeviceType={[
            "superLargeDesktop",
            "desktop",
            "tablet",
            "mobile",
          ]}
          pauseOnHover={false}
        >
          {banner.length > 0 &&
            banner.map((item, index) => {
              return (
                <Banner
                  key={index}
                  image={item.backdrop_path}
                  title={item.title}
                  date={item.release_date}
                  details={item.overview}
                  id={item.id}
                />
              )
            })}
        </Carousel>
      </section>
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
                    return (
                      <Link to={`/movie/${item.id}`} key={index}>
                        <Card
                          title={item.title}
                          date={item.release_date}
                          image={item.poster_path}
                          rating={item.vote_average}
                        />
                      </Link>
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
